all:: bem-bl
all:: $(patsubst %.bemjson.js,%.html,$(wildcard pages/*/*.bemjson.js))

BEM_TECHS_PATH := bem-bl/blocks-common/i-bem/bem/techs/

BEM_BUILD = bem build \
	-l bem-bl/blocks-common/ \
	-l bem-bl/blocks-desktop/ \
	-l blocks/ \
	-l $(@D)/blocks/ \
	-d $< \
	-t $1 \
	-o $(@D) \
	-n $(*F)

BEM_CREATE = bem create block \
		-f \
		-l pages \
		-t $1 \
		$(*F)
		
DO_GIT = @echo -- git: updating submodules; \
	test -d $1 || git submodule init; \
	git submodule update --force
		
%.html: %.bemhtml.js %.css %.js %.ie.css
	$(call BEM_CREATE,$(BEM_TECHS_PATH)html.js)

.PRECIOUS: %.bemhtml.js
%.bemhtml.js: %.deps.js
	$(call BEM_BUILD,$(BEM_TECHS_PATH)bemhtml.js)

%.deps.js: %.bemdecl.js
	$(call BEM_BUILD,deps.js)

%.bemdecl.js: %.bemjson.js
	$(call BEM_CREATE,bemdecl.js)

.PRECIOUS: %.ie.css
%.ie.css: %.deps.js
	$(call BEM_BUILD,ie.css)

.PRECIOUS: %.css
%.css: %.deps.js
	$(call BEM_BUILD,css)

.PRECIOUS: %.js
%.js: %.deps.js
	$(call BEM_BUILD,js)

.PHONY: bem-bl
bem-bl:
	$(call DO_GIT,$@)

bem-bl/: bem-bl

.PHONY: clean
clean:
	@echo Cleaning pages
	@rm -f $(filter-out %.bemjson.js,$(wildcard pages/*/*.*))

.PHONY: all
