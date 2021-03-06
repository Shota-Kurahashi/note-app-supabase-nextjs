import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const middleware = async (req: NextRequest, res: NextResponse) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ message: "Fetch error" });

  return NextResponse.json(data);
};
