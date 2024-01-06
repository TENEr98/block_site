import React, { FC, ReactNode } from 'react';

type Props = {
  header: ReactNode;
  form: ReactNode;
  title: string;
};

const FormPageLayout: FC<Props> = ({ header, form, title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}
      <main className="glow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-16 py-8 max-w-[25rem] bg-white self-center w-full">
          <h1 className="text-2xl mb-6">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};

export default FormPageLayout;
