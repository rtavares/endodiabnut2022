# Testpad marketing website - project commands
.PHONY: all

.DEFAULT:
	@echo "Usage: "
	@make help

help: ## Show this help.
	# From https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build-css: ## Run Tailwind to update CSSs
	yarn build-css

dev-serve: ## Build and start project with files changes watch and hot reload for development
	yarn dev-serve

reset-site: ## Remove generated output from 11ty
	rm -rfv `pwd`/_site

