import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-8">{title}</h2>
      <div className="grid gap-2 grid-flow-row">{children}</div>
    </>
  );
}
