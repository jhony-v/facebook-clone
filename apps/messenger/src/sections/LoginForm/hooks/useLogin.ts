import { useState } from "react"
import { useActionsStore } from "../../../store"
import { LoginPayload } from "../../../types/models"

type FormData = Omit<LoginPayload, "token">

export default function useLogin() {
  const [form, setForm] = useState<FormData>({
    password: "",
    username: "",
  })
  const {
    profile: { loginAsPreviousUser, logIn },
  } = useActionsStore()

  const handleContinueAsDefault = () => {
    loginAsPreviousUser()
  }

  const handleContinue = () => {
    logIn(form)
  }

  const onChangeForm = (name: keyof FormData) => {
    return {
      name,
      value: form[name],
      onChange: (ev) => {
        setForm((prevForm) => {
          return {
            ...prevForm,
            [ev.target.name]: ev.target.value,
          }
        })
      },
    }
  }
  return {
    onChangeForm,
    handleContinue,
    handleContinueAsDefault,
  }
}
