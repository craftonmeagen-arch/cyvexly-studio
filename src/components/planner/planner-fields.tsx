"use client";

import type { ReactNode } from "react";

const inputClasses =
  "mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue";

export function FieldShell({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-midnight-slate">
        {label}
        {required && <span className="ml-1 text-warning-coral">*</span>}
      </label>
      {hint && <p className="mt-1 text-xs text-cool-graphite">{hint}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-warning-coral">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  hint,
  error,
  required,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  hint,
  error,
  required,
  rows = 4,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  hint,
  error,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required}>
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      >
        <option value="">{placeholder ?? "Select one"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function RadioCardGroup({
  legend,
  name,
  value,
  onChange,
  options,
  error,
  required,
  columns = "sm:grid-cols-2",
}: {
  legend: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string; description?: string }[];
  error?: string;
  required?: boolean;
  columns?: string;
}) {
  return (
    <fieldset aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="text-sm font-medium text-midnight-slate">
        {legend}
        {required && <span className="ml-1 text-warning-coral">*</span>}
      </legend>
      <div className={`mt-3 grid gap-3 ${columns}`}>
        {options.map((option) => {
          const checked = value === option.id;
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-150 ${
                checked
                  ? "border-cyber-blue bg-cyber-blue/5 text-midnight-slate"
                  : "border-smoke-glass bg-frosted-glass text-cool-graphite hover:border-cyber-blue/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={checked}
                onChange={() => onChange(option.id)}
                className="mt-1 h-4 w-4 shrink-0 border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
              />
              <span>
                <span className="block font-medium text-midnight-slate">{option.label}</span>
                {option.description && (
                  <span className="mt-0.5 block text-xs text-cool-graphite">{option.description}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs text-warning-coral">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function CheckboxCardGroup({
  legend,
  name,
  values,
  onToggle,
  options,
  error,
  columns = "sm:grid-cols-2",
}: {
  legend: string;
  name: string;
  values: string[];
  onToggle: (id: string) => void;
  options: { id: string; label: string; description?: string }[];
  error?: string;
  columns?: string;
}) {
  return (
    <fieldset aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="text-sm font-medium text-midnight-slate">{legend}</legend>
      <div className={`mt-3 grid gap-3 ${columns}`}>
        {options.map((option) => {
          const checked = values.includes(option.id);
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-150 ${
                checked
                  ? "border-cyber-blue bg-cyber-blue/5 text-midnight-slate"
                  : "border-smoke-glass bg-frosted-glass text-cool-graphite hover:border-cyber-blue/40"
              }`}
            >
              <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={() => onToggle(option.id)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
              />
              <span>
                <span className="block font-medium text-midnight-slate">{option.label}</span>
                {option.description && (
                  <span className="mt-0.5 block text-xs text-cool-graphite">{option.description}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs text-warning-coral">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function NotSureToggle({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-150 ${
        checked
          ? "border-cyber-blue bg-cyber-blue/5 text-midnight-slate"
          : "border-smoke-glass bg-frosted-glass text-cool-graphite"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
      />
      <span>{label}</span>
    </label>
  );
}

export function StatusRow({
  categoryLabel,
  value,
  onChange,
  options,
}: {
  categoryLabel: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-smoke-glass/60 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-midnight-slate">{categoryLabel}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={checked}
              aria-label={`${categoryLabel}: ${option.label}`}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                checked
                  ? "border-cyber-blue bg-cyber-blue text-white"
                  : "border-smoke-glass bg-frosted-glass text-cool-graphite hover:border-cyber-blue/50"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SpectrumRow({
  left,
  right,
  value,
  onChange,
}: {
  left: string;
  right: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-cool-graphite">
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <input
        type="range"
        min={0}
        max={4}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-smoke-glass accent-cyber-blue"
        aria-label={`${left} to ${right}`}
      />
    </div>
  );
}
