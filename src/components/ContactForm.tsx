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
    success?: string;
    error?: string;
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simuler une validation
      if (!formData.email.includes("@")) {
        throw new Error(
          lang === "fr"
            ? "Adresse email invalide"
            : lang === "es"
            ? "Correo electrónico inválido"
            : "Invalid email address"
        );
      }

      // Réinitialiser le formulaire en cas de succès
      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {dictionary.success || "Votre message a été envoyé avec succès !"}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {dictionary.error || error}
        </Alert>
      )}

      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label={dictionary.name}
        name="name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        disabled={loading}
        sx={{ mb: 3 }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={dictionary.email}
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        disabled={loading}
        sx={{ mb: 3 }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="message"
        label={dictionary.message}
        name="message"
        multiline
        rows={6}
        value={formData.message}
        onChange={handleChange}
        disabled={loading}
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
        endIcon={
          loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={{ py: 1.5 }}
      >
        {dictionary.submit}
      </Button>
    </Box>
  );
}
