# ajmalrasi.com

Personal website for [ajmalrasi.com](https://ajmalrasi.com), hosted on GitHub Pages.

## Local preview

```bash
cd personal_page
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy with GitHub Pages

1. Push changes to the `main` branch.
2. In the repo on GitHub, open **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Under **Custom domain**, enter `ajmalrasi.com` and save.
5. Enable **Enforce HTTPS** once DNS is verified.

The site will be available at:

- https://ajmalrasi.github.io/personal_page/ (project URL)
- https://ajmalrasi.com (after DNS is configured)

## DNS for ajmalrasi.com (GoDaddy)

Update DNS in GoDaddy. Keep your **MX** and email records.

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ajmalrasi.github.io` |

Remove the old **WebsiteBuilder** A record for `@`.

DNS can take up to 24 hours to propagate. GitHub will issue HTTPS automatically after verification.

## Structure

```
.
├── index.html
├── css/style.css
├── favicon.svg
├── CNAME
└── .nojekyll
```
