# Grafana LLM examples

This is a Grafana plugin designed to showcase using the LLM functionality available in `@grafana/experimental`. Under the hood this uses the [`grafana-llm-app`] to proxy requests to the LLM provider.

## Getting started

To get started you'll need a few things:

- an OpenAI key - see the 'Getting access to LLMs' section of the [Getting Started with LLMs at Grafana doc][getting-started-doc]
  - this should be made available as the `OPENAI_API_KEY` environment variable
- Docker

Then run the following:

    docker-compose up

You should then be able to access Grafana on http://localhost:3000.

Next you'll need to build this plugin:

    npm install
    npm run dev

Head to the [LLM Examples](http://localhost:3000/a/grafana-llmexamples-app) plugin page to see some use of the LLMs in action!

## Explanation

The Grafana container in docker-compose is provisioned with the `grafana-llm-app` plugin installed (using `GF_INSTALL_PLUGINS`) and configured with your OpenAI key (using `provisioning/plugins/apps.yaml`).

This plugin makes use of the `@grafana/experimental` package to make requests to OpenAI via the `grafana-llm-app` plugin, which provides an authenticating proxy and handles streaming responses using Grafana Live.

[getting-started-doc]: https://docs.google.com/document/d/1H9bo0QOrVbmjioTleqFsknpGszZ-py75YX2aWRcCNGE/edit#heading=h.180bjy5a5l0k
