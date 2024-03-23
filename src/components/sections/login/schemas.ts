import { z } from "zod";

export const loginSchema = z.string().min(1, "Monga pon la contraseña");
