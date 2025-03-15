"use client";

import { useState } from "react";
import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Locale } from "@/i18n/config";

type ContactFormProps = {
  dictionary: {
    name: string;
    email: string;
    message: string;
    submit: string;
    title?: string;
    description?: string;
  };
  lang: Locale;
};

export default function ContactForm({ dictionary, lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Simuler un envoi de formulaire
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Réinitialiser le formulaire après succès
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        lang === "fr"
          ? "Une erreur est survenue. Veuillez réessayer plus tard."
          : lang === "es"
          ? "Se ha producido un error. Por favor, inténtelo de nuevo más tarde."
          : "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSuccessMessage = () => {
    if (lang === "fr") {
      return "Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.";
    } else if (lang === "es") {
      return "Su mensaje ha sido enviado con éxito. Le responderemos lo antes posible.";
    } else {
      return "Your message has been sent successfully. We will get back to you as soon as possible.";
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <TextField
        id="name"
        name="name"
        label={dictionary.name}
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        size="medium"
      />

      <TextField
        id="email"
        name="email"
        label={dictionary.email}
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        size="medium"
      />

      <TextField
        id="message"
        name="message"
        label={dictionary.message}
        value={formData.message}
        onChange={handleChange}
        required
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        size="medium"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        fullWidth
        size="large"
        startIcon={
          isSubmitting ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={{ py: 1.5 }}
      >
        {dictionary.submit}
      </Button>

      {submitStatus === "success" && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {getSuccessMessage()}
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
}
