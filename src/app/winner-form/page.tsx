"use client";
import TextField from "@/components/ui/TextField";
import Radio from "@/components/ui/Radio";
import styles from "./page.module.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
// Using manual safeParse to avoid runtime throws in dev overlay
import { useRouter } from "next/navigation";

const dobRegex =
  /^(0[1-9]|1[0-2]) \/ (0[1-9]|[12][0-9]|3[01]) \/ (19|20)\d{2}$/;

function isValidCalendarDate(maskedDob: string): boolean {
  const match = maskedDob.match(/^(\d{2}) \/ (\d{2}) \/ (\d{4})$/);
  if (!match) return false;
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function isAdult(maskedDob: string): boolean {
  const match = maskedDob.match(/^(\d{2}) \/ (\d{2}) \/ (\d{4})$/);
  if (!match) return false;
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const dob = new Date(year, month - 1, day);
  const today = new Date();
  const eighteen = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  return dob <= eighteen; // strictly older than or equal to 18 years
}

const FormSchema = z.object({
  parentFirstName: z.string().min(1, "Required"),
  parentLastName: z.string().min(1, "Required"),
  parentEmail: z.string().email("Invalid email"),
  relation: z.enum([
    "parent",
    "guardian",
    "step-parent",
    "grandparent",
    "other",
  ] as const),
  minorFirstName: z.string().min(1, "Required"),
  minorLastName: z.string().min(1, "Required"),
  minorDob: z
    .string()
    .min(1, "Required")
    .refine((v) => dobRegex.test(v) && isValidCalendarDate(v), {
      message: "Invalid date",
    })
    .refine((v) => isAdult(v), { message: "Must be 18+" }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function WinnerFormPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: FormValues) => {
    const parsed = FormSchema.safeParse(data);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        setError(key, { type: "zod", message: issue.message });
      });
      return;
    }
    console.log("Winner form submit", parsed.data);
    router.push("/release-terms");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Release Form</h1>
        <p className={styles.subtitle}>
          Please confirm the details below before reviewing <br /> the Parental
          Release Form to Parental Release Terms.
        </p>

        <form noValidate onSubmit={handleSubmit(onSubmit, () => {})}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Parent / Legal Guardian</h2>
            <div className={styles.gridTwoCols}>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                error={errors.parentFirstName?.message}
                {...register("parentFirstName", { required: "Required" })}
              />
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                error={errors.parentLastName?.message}
                {...register("parentLastName", { required: "Required" })}
              />
            </div>
            <TextField
              label="Email"
              placeholder="Enter email"
              type="email"
              error={errors.parentEmail?.message}
              {...register("parentEmail", {
                required: "Required",
                validate: (v) =>
                  z.string().email({ message: "Invalid email" }).safeParse(v)
                    .success || "Invalid email",
              })}
            />

            <div className={styles.relationship}>
              <div className={styles.relTitle}>Relationship to Minor:</div>
              <div className={styles.relList}>
                <Radio
                  label="Parent (Mother/Father)"
                  value="parent"
                  {...register("relation", { required: "Required" })}
                />
                <Radio
                  label="Legal Guardian"
                  value="guardian"
                  {...register("relation", { required: "Required" })}
                />
                <Radio
                  label="Step-Parent"
                  value="step-parent"
                  {...register("relation", { required: "Required" })}
                />
                <Radio
                  label="Grandparent with Custody"
                  value="grandparent"
                  {...register("relation", { required: "Required" })}
                />
                <Radio
                  label="Other (please specify)"
                  value="other"
                  {...register("relation", { required: "Required" })}
                />
              </div>
              <span
                className={`${styles.helper} ${
                  errors.relation ? styles.error : ""
                }`}
              >
                {errors.relation?.message ?? ""}
              </span>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Winner (Minor)</h2>
            <div className={styles.gridTwoCols}>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                error={errors.minorFirstName?.message}
                {...register("minorFirstName", { required: "Required" })}
              />
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                error={errors.minorLastName?.message}
                {...register("minorLastName", { required: "Required" })}
              />
            </div>
            <Controller
              name="minorDob"
              control={control}
              rules={{
                validate: {
                  required: (v) => (v && v.trim() !== "") || "Required",
                  format: (v) =>
                    !v ||
                    (dobRegex.test(v) && isValidCalendarDate(v)) ||
                    "Invalid date",
                  age: (v) => !v || isAdult(v) || "Must be 18+",
                },
              }}
              render={({ field }) => {
                const formatDob = (raw: string) => {
                  const digits = raw.replace(/\D/g, "").slice(0, 8);
                  const mm = digits.slice(0, 2);
                  const dd = digits.slice(2, 4);
                  const yyyy = digits.slice(4, 8);
                  let out = "";
                  if (mm) out += mm;
                  if (dd) out += ` / ${dd}`;
                  if (yyyy) out += ` / ${yyyy}`;
                  return out;
                };
                return (
                  <TextField
                    label="Date of Birth"
                    placeholder="MM / DD / YYYY"
                    inputMode="numeric"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(formatDob(e.target.value))}
                    onBlur={field.onBlur}
                    error={errors.minorDob?.message}
                  />
                );
              }}
            />
          </section>

          <div className={styles.ctaContainer}>
            <button type="submit" className={styles.ctaOuter}>
              <span className={styles.ctaInner}>Continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
