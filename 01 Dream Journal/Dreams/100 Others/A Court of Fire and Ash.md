---
cssclasses:
  - dream-journal-base
tags:
  - dream
Completed: false
Home:
  - "[[Dream Journal Home Page]]"
---
<div class="block-language-tabs">
	<div data-x-data="{ tab: 0 }">
		<div class="html-tabs">
			<div class="html-tab html-tab-active" data-x-bind:class="{ 'html-tab-active': tab == 0 }" data-x-on:click="tab = 0"> <p>Plots</p> </div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 1 }" data-x-on:click="tab = 1"> <p>Characters</p> </div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 2 }" data-x-on:click="tab = 2"> <p>Notes</p> </div>
		</div>
		<div class="html-tab-content">
			<div data-x-show="tab == 0" style="">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box">
							<div class="callout-title">  <div class="callout-title-inner"> story arc </div> </div>
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box">
							<div class="callout-title">  <div class="callout-title-inner"> story arc </div> </div>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
			<div data-x-show="tab == 1" style="display: none;">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> character note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
			<div data-x-show="tab == 2" style="display: none;">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box def-note">
							<div class="callout-title"> <div class="callout-title-inner"> image + note </div> </div>
							<img alt="placeholder.png" src="">
							<p>...</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box def-note">
							<div class="callout-title"> <div class="callout-title-inner"> note </div> </div>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
