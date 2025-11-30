import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
}

// This route shows an example for serving a component using a route handler.
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    // Cache the registry import
    const registryData = await import("@/registry.json");
    const registry = registryData.default;

    // Find the component from the registry.
    const component = registry.items.find((c) => c.name === name);

    // If the component is not found, return a 404 error.
    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      );
    }

    // If the component has no files, return a 400 error.
    if (!component.files?.length) {
      return NextResponse.json(
        { error: "Component has no files" },
        { status: 400 }
      );
    }

    // Read all files in parallel.
    const filesWithContent = await Promise.all(
      component.files.map(async (file: RegistryFile) => {
        const filePath = path.join(process.cwd(), file.path);
        const content = await fs.readFile(filePath, "utf8");
        return { ...file, content };
      })
    );

    // Return the component with the files.
    return NextResponse.json({ ...component, files: filesWithContent });
  } catch (error) {
    console.error("Error processing component request:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
