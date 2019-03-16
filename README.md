# dev-note

## setup

create your contentful's secrets.

```console
> echo '
CONTENTFUL_SPACE_ID={{YOUR SPACE-ID}}
CONTENTFUL_ACCESS_TOKEN={{YOUR ACCESS-TOKEN}}
' > .env
```

build docker container.

```console
> ./bin/build
```

launch docker container on development.

```console
> ./bin/dev
```
