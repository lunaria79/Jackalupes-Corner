---
cssclasses:
  - dream-journal-base
  - gods-and-fiends
  - mhw
  - no-properties
---
<div class="block-language-tabs">
	<div data-x-data="{ tab: 0 }">
		<div class="html-tabs">
			<div class="html-tab html-tab-active" data-x-bind:class="{ 'html-tab-active': tab == 0 }" data-x-on:click="tab = 0"> <p>Dual Blades </p> </div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 1 }" data-x-on:click="tab = 1"> <p>Katanas</p> </div>
			<div class="html-tab html-tab-not-first" data-x-bind:class="{ 'html-tab-active': tab == 2 }" data-x-on:click="tab = 2"> <p>Notes</p> </div>
		</div>
		<div class="html-tab-content">
			<div data-x-show="tab == 0" style="">
				<div class="wrapper grid">
					<div class="grid left">
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> Holy Swords </div> </div>
							<img alt="placeholder.png" src="https://raw.githubusercontent.com/lunaria79/Jackalupes-Corner/refs/heads/main/00%20_resources/02FkH0.png">
							<p>
							<b><i>Ceremonial equipment of the city guardsmen, though their bite is anything but ornamental.</i></b> </p>
							<p>
							<b>Attack:</b> 252 <b>Element:</b> 💦 120
							<br> <b>Affinity:</b> 0%
							<br> <b>Decorations:</b> 1 <i>Level 3</i> Slot
							<br> <b>Sharpness:</b> 🔵
							</p>
							<p>
							 <span class="divider"> -- -- -- </span>
							<br> <b>High Commendation:</b> x3
							<br> <where>red</where>
							<br> <b>Dragonvein Crystal:</b>  x6
							<br> <b>Wyvern Gem:</b> x2 
							<br> <b>Nova Crystal:</b>  x2
							<br>32,000 🪙
							</p>
						</div>
					</div>
					<div class="grid right">
						<div class="box char-note">
							<div class="callout-title">  <div class="callout-title-inner"> ... </div> </div>
							<img alt="placeholder.png" src="">
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
					</div>
					<div class="grid right">
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