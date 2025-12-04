# Configuración Personal del Portafolio

Este proyecto utiliza un sistema centralizado de configuración para toda la información personal. Esto facilita actualizar tus datos sin tener que buscar en múltiples archivos.

## 📝 Archivo Principal de Configuración

**Ubicación**: `/src/config/personal.ts`

Este archivo contiene toda tu información personal:

```typescript
export const personalInfo = {
  // Nombre de marca/empresa
  brandName: "Automata",
  fullName: "Jose Anicama",
  
  // Información de contacto
  email: "j.j.anicamatanta@gmail.com",
  
  // Links de redes sociales
  socialLinks: {
    github: "https://github.com/automatape2",
    linkedin: "https://www.linkedin.com/in/jjanicamatanta/",
    twitter: "https://x.com/JJAnicamaTanta"
  },
  
  // Nombres de usuario (solo para mostrar)
  socialUsernames: {
    github: "automatape2",
    linkedin: "jjanicamatanta",
    twitter: "@JJAnicamaTanta"
  }
}
```

## 🔄 Cómo Actualizar Tu Información

### Cambiar tu nombre de marca

Edita en `/src/config/personal.ts`:

```typescript
brandName: "TuNuevoNombre"
```

Esto actualizará automáticamente:
- El logo en la navegación superior
- El nombre en el footer
- Cualquier otra referencia a tu marca

### Cambiar redes sociales

Edita en `/src/config/personal.ts`:

```typescript
socialLinks: {
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/in/tu-perfil/",
  twitter: "https://x.com/TuUsuario"
}
```

Esto actualizará automáticamente:
- Links en el componente Hero
- Links en el Footer
- Links en todos los componentes de redes sociales

### Cambiar email

Edita en `/src/config/personal.ts`:

```typescript
email: "tu@email.com"
```

Esto actualizará automáticamente:
- Email en la sección de contacto
- Email en el footer
- Cualquier otro lugar donde se muestre el email

## 📂 Archivos que Usan Esta Configuración

Los siguientes archivos importan y usan `personalInfo`:

1. **`/src/i18n/translations.ts`** - Traducciones (ES/EN)
2. **`/src/layouts/Layout.astro`** - Layout principal y navegación
3. **`/src/components/Footer.astro`** - Pie de página
4. **`/src/components/LinkedInPosts.astro`** - Sección de LinkedIn

## ✅ Ventajas de Este Sistema

- ✨ **Centralizado**: Todo en un solo lugar
- 🚀 **Fácil de actualizar**: Cambia una vez, actualiza todo
- 🔒 **Type-safe**: TypeScript garantiza que uses los valores correctos
- 📦 **Modular**: Fácil de expandir con más información

## 🎯 Próximos Pasos Recomendados

Si quieres agregar más información personal:

1. Abre `/src/config/personal.ts`
2. Agrega tus nuevos campos:
   ```typescript
   export const personalInfo = {
     // ... campos existentes
     
     // Nuevos campos
     phone: "+51 999 999 999",
     location: "Lima, Perú",
     timezone: "GMT-5"
   }
   ```
3. Usa estos valores en tus componentes importando:
   ```typescript
   import { personalInfo } from "../config/personal";
   ```

## 💡 Tip

Cada vez que cambies información personal, solo necesitas editar `/src/config/personal.ts` y el cambio se reflejará automáticamente en todo el sitio.
