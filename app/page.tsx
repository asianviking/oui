import * as React from "react";
import { ComponentPreview } from "@/components/component-preview";
import ConnectWithMail from "@/registry/connect-with-mail/connect";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

const components = [
  {
    name: "connect-with-mail",
    title: "A simple connect with mail button",
    component: ConnectWithMail,
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Onchain UI Registry
        </h1>
        <p className="text-muted-foreground">
          A custom registry for onchain UI components.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        {components.map((component) => (
          <ComponentPreview
            key={component.name}
            name={component.name}
            title={component.title}
          >
            <component.component />
          </ComponentPreview>
        ))}
      </main>
    </div>
  );
}
