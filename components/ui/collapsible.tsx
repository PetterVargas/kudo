'use client';

import { createContext, useContext, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

const CollapsibleContext = createContext(false);

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export function Collapsible({ open = false, onOpenChange: _onOpenChange, className, children, ...props }: CollapsibleProps) {
  return (
    <CollapsibleContext.Provider value={open}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

interface CollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function CollapsibleContent({ className, children, ...props }: CollapsibleContentProps) {
  const open = useContext(CollapsibleContext);

  if (!open) return null;

  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
