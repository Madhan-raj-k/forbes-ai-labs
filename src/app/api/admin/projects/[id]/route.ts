import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";

function requireAuth() {
  const authenticated = isAdminAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = requireAuth();
  if (authError) return authError;

  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, image_url, tech_stack, live_url, github_url, featured } = body;

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        image_url,
        tech_stack,
        live_url: live_url || null,
        github_url: github_url || null,
        featured,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = requireAuth();
  if (authError) return authError;

  try {
    const { id } = params;
    const supabase = createAdminClient();
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}