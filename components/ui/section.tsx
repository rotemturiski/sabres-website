import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Section, Container };

