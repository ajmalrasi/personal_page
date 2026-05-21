# ajmalrasi.com

Personal website for [ajmalrasi.com](https://ajmalrasi.com), deployed as a Render static site.

## Local preview

```bash
cd personal_page
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy to Render

### Option A: Blueprint (recommended)

1. Push this repo to GitHub.
2. In the [Render Dashboard](https://dashboard.render.com/), click **New → Blueprint**.
3. Connect the repository and apply the `render.yaml` blueprint.
4. Render will create a static site and attach `ajmalrasi.com` and `www.ajmalrasi.com`.

### Option B: Manual static site

1. Push this repo to GitHub.
2. In Render, click **New → Static Site**.
3. Connect the repo and use:
   - **Build Command:** `echo "Static site"`
   - **Publish Directory:** `.`
4. Add custom domains under **Settings → Custom Domains**.

## DNS for ajmalrasi.com

After adding the domain in Render, update DNS at your registrar (currently GoDaddy):

| Record | Name | Value |
| --- | --- | --- |
| CNAME | `www` | Your Render static site URL (e.g. `ajmalrasi-com.onrender.com`) |
| ALIAS / ANAME / A | `@` | Render apex instructions from the dashboard |

Render provides exact DNS values on the **Custom Domains** page for your service. TLS certificates are issued automatically once DNS is verified.

## Structure

```
.
├── index.html
├── css/style.css
├── favicon.svg
└── render.yaml
```
