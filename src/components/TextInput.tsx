export type TextInputProps = {
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
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
      />
    </div>
  );
};
