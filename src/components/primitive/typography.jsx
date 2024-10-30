import { cn } from "@/lib/utils";

export function TypographyH1({ children, className, ...props }) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className, ...props }) {
  return (
    <h2
      {...props}
      className={cn(
        "first: scroll-m-20 text-3xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className, ...props }) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className, ...props }) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className, ...props }) {
  return (
    <p {...props} className={cn("[&:not(:first-child)]: leading-7", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className, ...props }) {
  return (
    <blockquote {...props} className={cn("border-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({ children, className, ...props }) {
  return (
    <code
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({ children, className, ...props }) {
  return (
    <p {...props} className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children, className, ...props }) {
  return (
    <small
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    >
      {" "}
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className, ...props }) {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)}>
      {" "}
      {children}.
    </p>
  );
}
