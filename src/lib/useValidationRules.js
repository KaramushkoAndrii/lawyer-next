import { useTranslations } from "next-intl";

const useValidationRules = () => {
  const t = useTranslations("ValidationMessages");

  return {
    email: {
      required: true,
      pattern: { value: /^\S+@\S+\.\S+$/, message: t("email") },
    },
    phone: {
      required: true,
      pattern:
        /^(?:\+?38)?0(50|63|66|67|68|73|89|91|92|93|94|95|96|97|98|99)\d{7}$/,
      message: t("phone"),
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      message: t("name"),
    },
  };
};

export default useValidationRules;
