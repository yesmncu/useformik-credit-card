import * as Yup from "yup";

const creditCardFormValidation = () => {

  return Yup.object({
    fullName: Yup.string()
      .matches(
        /^[a-zA-Z]+(\s[a-zA-Z]+)+$/,
        "Ad Soyad yalnızca harf ve boşluk içerebilir"
      )
      .min(3, "Ad Soyad alanına en az 3 karakter girmelisiniz")
      .max(50, "Ad Soyad alanına en fazla 50 karakter girebilirsiniz")
      .required("Ad Soyad alanı gereklidir"),
    number: Yup.string()
      .matches(
        /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/,
        "Geçerli Kart Numarası girmelisiniz"
      )
      .required("Kart Numarası alanı gereklidir"),
    expiry: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
        "Geçerli Ay/Yıl alanı girmelisiniz"
      )
      .required("Ay/Yıl alanı gereklidir"),
    cvc: Yup.string()
      .matches(/^[0-9]{3,4}$/, "Geçerli CVC alanı girmelisiniz")
      .required("CVC alanı gereklidir"),
  });
};

export { creditCardFormValidation };
