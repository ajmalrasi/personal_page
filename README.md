# ajmalrasi.com

Personal website for [ajmalrasi.com](https://ajmalrasi.com).

**Live site:** deployed from [ajmalrasi.github.io](https://github.com/ajmalrasi/ajmalrasi.github.io) → https://ajmalrasi.github.io

This repo is a working copy of the site source files.

## Local preview

```bash
cd personal_page
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy

The site is published from **[ajmalrasi/ajmalrasi.github.io](https://github.com/ajmalrasi/ajmalrasi.github.io)**.

After editing files here, copy changes to that repo and push to `master`.

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
└── .nojekyll
```
