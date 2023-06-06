# ROBOKOP Landing Page

## Docker

Build the docker image with:

```bash
docker build -t containers.renci.org/translator/landing-page:2.0.0 .
```

Test the image locally by creating a container and checking [localhost](http://localhost):

```bash
docker run --rm -p 80:3000 containers.renci.org/translator/landing-page:2.0.0
```

> **Note**
> Make sure the tag and version match between commands

> **Warning**
> To avoid errors on a M1 Mac, build for AMD64 using the following environment variable. [More information](https://stackoverflow.com/questions/65612411/forcing-docker-to-use-linux-amd64-platform-by-default-on-macos/69636473#69636473)
>
> ```bash
> export DOCKER_DEFAULT_PLATFORM=linux/amd64
> ```

## Kubernetes Deploy

The site is built by a Github Action script on each new release, and pushed to the Github Container Registry at:

[ghcr.io/robokopu24/robokopu24.github.io](https://ghcr.io/robokopu24/robokopu24.github.io)

### Environment Variables

Ensure that the `NEXT_PUBLIC_RECAPTCHA_KEY` is set. For development, create a `.env.local`
