# Waterfall — legal & support site

Public documentation for the [Waterfall](https://github.com/Halley04/Waterfall) mobile app (private app repo).

| Page | URL (after GitHub Pages is enabled) |
|------|-------------------------------------|
| Home | https://halley04.github.io/Waterfall-docs/ |
| Privacy Policy | https://halley04.github.io/Waterfall-docs/privacy.html |
| Terms of Use | https://halley04.github.io/Waterfall-docs/terms.html |
| Account deletion | https://halley04.github.io/Waterfall-docs/delete-account.html |

## GitHub Pages

**Settings → Pages → Source:** Deploy from branch `main`, folder **`/ (root)`**.

This repository is **public** so GitHub Pages works on the free plan. The app source stays in the private `Waterfall` repo.

## Support

Use [GitHub Issues](https://github.com/Halley04/Waterfall-docs/issues) on this repo for privacy and support requests.

## Syncing from the app repo

Legal pages are authored in the private app repo under `docs/`. When you update them:

```powershell
# From waterfall_demo — copy into your local Waterfall-docs clone
Copy-Item -Recurse -Force docs\index.html, docs\privacy.html, docs\terms.html, docs\delete-account.html, docs\css C:\path\to\Waterfall-docs\
```

Then commit and push `Waterfall-docs`.
