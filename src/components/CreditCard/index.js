// packages
import { useState } from "react";
import { useFormik } from "formik";
import { creditCardFormValidation } from "./validations";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import InputMask from "react-input-mask";

//components
import Input from "../Input";
import Button from "../Button";

//icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


// styles
import {
  Wrapper,
  Inner,
  Row,
  Col12,
  Success
} from "./styles";

const CreditCard = () => {

  const [focus, setFocus] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      expiry: "",
      cvc: "",
    },
    validationSchema: creditCardFormValidation(),
    onSubmit: async () => {
      setFormSuccess(true);
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Inner>
        {!formSuccess ? (
          <Row>
            <Col12>
              <Cards
                cvc={formik.values.cvc}
                expiry={formik.values.expiry}
                focused={focus}
                name={formik.values.fullName}
                number={formik.values.number}
                preview={false}
                placeholders={{ name: "KART SAHİBİ" }}
                locale={{ valid: "Ay / Yıl" }}
              />
            </Col12>
            <Col12>
              <Input
                label="Kart Sahibi Ad Soyad"
                placeholder="Kart Sahibi Ad Soyad"
                name="fullName"
                value={formik.values.fullName}
                onFocus={(e) => setFocus(e.target.name)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && formik.errors.fullName}
                invalid={formik.touched.fullName && formik.errors.fullName}
                valid={
                  formik.touched.fullName &&
                  !formik.errors.fullName &&
                  "Geçerli Alan"
                }
              />
            </Col12>
            <Col12>
              <InputMask
                mask="9999 9999 9999 9999"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={(e) => setFocus(e.target.name)}
              >
                {(inputProps) => (
                  <Input
                    label="Kart Numarası"
                    placeholder="Kart Numarası"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.number && formik.errors.number}
                    invalid={formik.touched.number && formik.errors.number}
                    valid={
                      formik.touched.number &&
                      !formik.errors.number &&
                      "Geçerli Alan"
                    }
                    {...inputProps}
                  />
                )}
              </InputMask>
            </Col12>
            <Col12>
              <InputMask
                mask="99/99"
                maskPlaceholder="mm/yy"
                value={formik.values.expiry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={(e) => setFocus(e.target.name)}
              >
                {(inputProps) => (
                  <Input
                    label="Ay / Yıl"
                    placeholder="Ay / Yıl"
                    name="expiry"
                    value={formik.values.expiry}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.expiry && formik.errors.expiry}
                    invalid={formik.touched.expiry && formik.errors.expiry}
                    valid={
                      formik.touched.expiry &&
                      !formik.errors.expiry &&
                      "Geçerli Alan"
                    }
                    {...inputProps}
                  />
                )}
              </InputMask>
            </Col12>
            <Col12>
              <InputMask
                mask="999"
                value={formik.values.cvc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={(e) => setFocus(e.target.name)}
              >
                {(inputProps) => (
                  <Input
                    label="CVC"
                    placeholder="CVC"
                    name="cvc"
                    value={formik.values.cvc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cvc && formik.errors.cvc}
                    invalid={formik.touched.cvc && formik.errors.cvc}
                    valid={
                      formik.touched.cvc &&
                      !formik.errors.cvc &&
                      "Geçerli Alan"
                    }
                    {...inputProps}
                  />
                )}
              </InputMask>
            </Col12>
            <Col12>
              <Button type="primary">Gönder</Button>
            </Col12>
          </Row>
        ) : (
          <Success> <CheckCircleIcon /> Gönderim Başarılı</Success>
        )}
      </Inner>
    </Wrapper>
  );
};

export default CreditCard;
