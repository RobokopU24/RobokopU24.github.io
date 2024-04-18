# AIxB Landing Page

## Kubernetes Deploy

The site is built by a Github Action script on each new release, and pushed to the Github Container Registry at:

[ghcr.io/robokopu24/landing-page](https://ghcr.io/robokopu24/landing-page)

Update the helm chart in [translator-devops](https://github.com/helxplatform/translator-devops), `/helm/frontend-umbrella/charts/landing-page/values.yaml` with the new release tag.

> **Note**
> As of 7/14/23, this is on the `robokop-u24` branch in `translator-devops`

Then upgrade the deployment with Helm:
```bash
helm upgrade robokop-frontend helm/frontend-umbrella -n robokop-u24
```

### Environment Variables

Ensure that the `NEXT_PUBLIC_RECAPTCHA_KEY` is set.
