---
cssclasses:
  - dream-journal-base
tags:
  - Stage
Completed: 
Home:
  - "[[Dream Journal Home Page]]"
---
<div class="block-language-tabs">
	<div data-x-data="{ tab: 0 }">
		<div class="html-tabs">
			<div class="html-tab html-tab-active" data-x-bind:class="{ 'html-tab-active': tab == 0 }" data-x-on:click="tab = 0">
				<p>Plots</p>
			</div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 1 }" data-x-on:click="tab = 1">
				<p>Characters</p>
			</div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 2 }" data-x-on:click="tab = 2">
				<p>Notes</p>
			</div>
		</div>
		<div class="html-tab-content">
			<div data-x-show="tab == 0" style="">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 384 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
								</div>
								<div class="callout-title-inner">
									story arc
								</div>
							</div>
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 384 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
								</div>
								<div class="callout-title-inner">
									story arc
								</div>
							</div>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
			<div data-x-show="tab == 1" style="display: none;">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box char-note">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 448 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
								</div>
								<div class="callout-title-inner">
									character note
								</div>
							</div>
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box char-note">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 448 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
								</div>
								<div class="callout-title-inner">
									character note
								</div>
							</div>
							<p>...</p>
						</div>
						<div class="box">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 512 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path></svg>
								</div>
								<div class="callout-title-inner">
									Moodboard + Gallery
								</div>
							</div><img alt="steampunk moodboard.png" referrerpolicy="no-referrer" src="C:/Users/regin/OneDrive/Dream%20Journal/02%20Dream%20Journal/Dreams/Fantasy%20Steampunk/Images/steampunk%20moodboard.png"><br>
							<a class="internal-link" data-href="Undersea Gallery" href="Undersea%20Gallery" rel="noopener" target="_blank"><span aria-hidden="true" aria-label="FasImages" class="iconize-icon-in-link" data-icon="FasImages" title="FasImages"></span> Undersea Gallery</a><br>
							---
						</div>
					</div>
				</div>
			</div>
			<div data-x-show="tab == 2" style="display: none;">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box def-note">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 448 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"></path></svg>
								</div>
								<div class="callout-title-inner">
									image + note
								</div>
							</div><img alt="SSS Stargazer.png" src="C:/Users/regin/OneDrive/Dream%20Journal/02%20Dream%20Journal/Dreams/Fantasy%20Steampunk/Images/SSS%20Stargazer.png">
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box def-note">
							<div class="callout-title">
								<div class="callout-icon">
									<svg fill="currentColor" height="16px" viewbox="0 0 448 512" width="16px" xmlns="http://www.w3.org/2000/svg">
									<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"></path></svg>
								</div>
								<div class="callout-title-inner">
									note
								</div>
							</div>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>