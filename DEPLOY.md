# 🚀 Guía de Despliegue - Portfolio

Esta guía explica cómo configurar y usar el pipeline de GitHub Actions para desplegar automáticamente el portfolio al servidor via SSH.

## 📋 Información del Servidor

- **Host**: `66.29.148.137`
- **Usuario**: `ejyjaujiet`
- **Protocolo**: SSH con autenticación por llave pública/privada
- **Passphrase**: Requerida (configurada en secrets)

## 🔑 Configuración Inicial de Secrets en GitHub

### Paso 1: Acceder a Settings
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, navega a **Secrets and variables** → **Actions**
4. Click en **New repository secret**

### Paso 2: Crear los Secrets

Crea los siguientes 4 secrets:

#### 1. `SSH_PRIVATE_KEY`
Tu llave privada SSH completa.

**Cómo obtenerla:**
```bash
cat ~/.ssh/id_rsa
```

**Formato esperado:**
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABCx...
[tu llave privada completa]
-----END OPENSSH PRIVATE KEY-----
```

#### 2. `SSH_PUBLIC_KEY`
Tu llave pública SSH.

**Cómo obtenerla:**
```bash
cat ~/.ssh/id_rsa.pub
```

**Formato esperado:**
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC... tu-email@ejemplo.com
```

#### 3. `SSH_PASSPHRASE`
La frase secreta que protege tu llave privada.

**Valor:**
```
[tu-frase-secreta-aquí]
```

#### 4. `DEPLOY_PATH`
La ruta exacta en el servidor donde se desplegará el contenido del `dist`.

**Ejemplos:**
```
/var/www/html
/home/ejyjaujiet/public_html
/home/ejyjaujiet/domains/tudominio.com/public_html
```

## 🔄 Cómo Funciona el Pipeline

### Trigger Automático
El pipeline se ejecuta automáticamente cuando:
- Haces `push` a la rama `main`
- También puedes ejecutarlo manualmente desde GitHub Actions

### Proceso Paso a Paso

1. **Checkout**: Descarga el código del repositorio
2. **Setup Node.js**: Instala Node.js v20
3. **Install dependencies**: Ejecuta `npm ci` para instalar dependencias
4. **Build**: Ejecuta `npm run build` para generar la carpeta `dist`
5. **Setup SSH**: Configura las llaves SSH y el passphrase
6. **Deploy**: Usa `rsync` para sincronizar `dist/` con el servidor
7. **Verify**: Verifica que los archivos se hayan desplegado correctamente

## 🛠️ Uso del Pipeline

### Despliegue Automático
Simplemente haz:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

El despliegue se ejecutará automáticamente.

### Despliegue Manual
1. Ve a tu repositorio en GitHub
2. Click en **Actions**
3. Selecciona el workflow **Deploy to Server via SSH**
4. Click en **Run workflow** → **Run workflow**

## 📊 Verificar el Despliegue

### Desde GitHub Actions
1. Ve a la pestaña **Actions** en tu repositorio
2. Click en la ejecución más reciente
3. Revisa los logs de cada paso

### Desde SSH (Local)
Puedes verificar manualmente conectándote al servidor:
```bash
ssh ejyjaujiet@66.29.148.137
ls -la /ruta/donde/desplegaste
```

## 🔧 Troubleshooting

### Error: "Permission denied (publickey)"
**Causa**: Las llaves SSH no están configuradas correctamente.

**Solución**:
1. Verifica que `SSH_PRIVATE_KEY` y `SSH_PUBLIC_KEY` sean correctas
2. Asegúrate de que la llave pública esté agregada al servidor en `~/.ssh/authorized_keys`

### Error: "Bad passphrase"
**Causa**: La passphrase es incorrecta.

**Solución**:
- Verifica que `SSH_PASSPHRASE` contenga la frase secreta correcta

### Error: "Host key verification failed"
**Causa**: El host no está en `known_hosts`.

**Solución**:
- El workflow ya maneja esto con `ssh-keyscan`, pero si persiste, puedes agregar `-o StrictHostKeyChecking=no`

### Los archivos no se actualizan
**Causa**: Posible problema con rsync o permisos.

**Solución**:
1. Verifica que `DEPLOY_PATH` sea correcta
2. Verifica que el usuario `ejyjaujiet` tenga permisos de escritura en esa ruta
3. Revisa los logs del paso "Deploy via SSH" en GitHub Actions

## 📁 Estructura del Proyecto

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de despliegue
├── src/                        # Código fuente
├── public/                     # Archivos estáticos
├── dist/                       # Build generado (se despliega)
├── package.json
└── DEPLOY.md                   # Esta guía
```

## 🔐 Seguridad

⚠️ **IMPORTANTE**:
- Nunca compartas tus secrets de GitHub
- Las llaves privadas nunca deben estar en el código
- El `.gitignore` debe excluir archivos sensibles
- Usa siempre passphrase en tus llaves SSH

## 📝 Comandos Útiles

### Generar nuevas llaves SSH (si necesitas)
```bash
ssh-keygen -t rsa -b 4096 -C "tu-email@ejemplo.com"
```

### Copiar llave pública al servidor
```bash
ssh-copy-id ejyjaujiet@66.29.148.137
```

### Probar conexión SSH
```bash
ssh -v ejyjaujiet@66.29.148.137
```

### Build local
```bash
npm run build
```

### Preview local del build
```bash
npm run preview
```

## 🎯 Checklist de Despliegue

Antes de hacer push a `main`, verifica:

- [ ] El código compila sin errores (`npm run build`)
- [ ] Los secrets de GitHub están configurados
- [ ] La ruta `DEPLOY_PATH` es correcta
- [ ] Tienes permisos de escritura en el servidor
- [ ] La llave pública está en el servidor (`~/.ssh/authorized_keys`)

## 📞 Información de Contacto del Servidor

**Configuración SSH Local** (opcional, para acceso manual):

Puedes agregar esto a tu `~/.ssh/config`:
```
Host portfolio-server
    HostName 66.29.148.137
    User ejyjaujiet
    IdentityFile ~/.ssh/id_rsa
```

Luego puedes conectar simplemente con:
```bash
ssh portfolio-server
```

---

**Última actualización**: 2025-12-02
