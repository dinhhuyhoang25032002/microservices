import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
type InputPasswordProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputPassword = ({
  onBlur,
  value,
  onChange,
  className,
}: InputPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="flex flex-col w-full ">
      <label htmlFor="password">Mật khẩu</label>
      <div className="relative w-full ">
        <input
          type={isShowPassword === true ? "text" : "password"}
          name="password"
          id="password"
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          className={`${className} w-full`}
        />
        {isShowPassword === true ? (
          <FaRegEye
            className="absolute top-1/2 translate-y-[-50%] right-3 cursor-pointer"
            onClick={() => setIsShowPassword(false)}
          />
        ) : (
          <FaRegEyeSlash
            className="absolute top-1/2 translate-y-[-50%] right-3 cursor-pointer"
            onClick={() => setIsShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
};

export default InputPassword;
