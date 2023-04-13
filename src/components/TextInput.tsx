import { UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = {
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  ...props
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <>
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        </>
      )}

      <input
        type={type ?? "text"}
        placeholder={placeholder ?? ""}
        className="input input-bordered w-full max-w-xs"
        {...props.register}
      />
    </div>
  );
};
