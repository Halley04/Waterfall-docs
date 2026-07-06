# Waterfall — legal & support site

Public documentation for the [Waterfall](https://github.com/Halley04/Waterfall) mobile app (private app repo).

| Page | URL (after GitHub Pages is enabled) |
|------|-------------------------------------|
| Home | https://halley04.github.io/Waterfall-docs/ |
| Privacy Policy | https://halley04.github.io/Waterfall-docs/privacy.html |
| Terms of Use | https://halley04.github.io/Waterfall-docs/terms.html |

## GitHub Pages

1. **Settings → Pages → Build and deployment → Source:** **GitHub Actions** (not “Deploy from a branch”).
2. **Settings → Actions → General → Workflow permissions:** **Read and write permissions**.
3. Push to `main` — the `Deploy site` workflow publishes the site.

Live URLs:

- https://halley04.github.io/Waterfall-docs/
- https://halley04.github.io/Waterfall-docs/privacy.html
- https://halley04.github.io/Waterfall-docs/terms.html

### If deploy fails

| Check | Where |
|-------|--------|
| Source is **GitHub Actions** | Settings → Pages |
| **Read and write** for GITHUB_TOKEN | Settings → Actions → General |
| No pending approval | Actions → failed run → `github-pages` environment |
| Re-run | Actions → **Deploy site** → Re-run all jobs |

The older automatic “pages build and deployment” workflow fails on some accounts until workflow permissions are enabled.

## Support

Use [GitHub Issues](https://github.com/Halley04/Waterfall-docs/issues) on this repo for privacy and support requests.

## Syncing from the app repo

Legal pages are authored in the private app repo under `docs/`. When you update them:

```powershell
# From waterfall_demo — copy into your local Waterfall-docs clone
Copy-Item -Recurse -Force docs\index.html, docs\privacy.html, docs\terms.html, docs\css C:\path\to\Waterfall-docs\
```

Then commit and push `Waterfall-docs`.
