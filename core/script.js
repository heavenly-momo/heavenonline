/***************************************************************
momotsuki's net art framework
Feel free to borrow any amount of this script for
your own projects, so long as momotsuki is credited proper.
***************************************************************/

/*******************************
Dummy-proof settings here.
*******************************/

/*
	Name of the core site.
*/

coretitle = "core"

/*
	Site-wide palette of colors.
*/

colors = [
	"white #FFFFFF",
	"black #000000",
	"lightgray #D8D8D8",
	"darkgray #545454",
	"red #FF0000",
	"green #00FF00",
	"blue #0030FF",
	"fuchsia #FF00FF",
	"cyan #00FFFF",
	"orange #FF5000"
]

/*
	Core settings.
*/

iconanim = false
iconframes = 0
iconalternate = false

cursor = ""
cursorsize = 13
hoversize = 15

font = ""

noscrollbarcolor = false
noscrollbarborder = false
nohr = false
nohranim = false
nodiamonds = false
noborder = false
noboxshadow = false

color1 = "lightgray"
color2 = "red"
color3 = "green"

twcolor = ""
ccolor = ""
bordercolor = ""
returnbuttoncolor = ""

scrollbarbordercolor = ""
dialogbordercolor = ""

scrollbarcolor = ""
shadowcolor = ""
groovycolor1 = ""
groovydark1 = true
audiocolor = ""
audiodark = true

groovycolor2 = ""
groovydark2 = true

shadow = ""
boxshadow = "black"

/*
	Whether or not to block tabbing. If the site is exploration-based, you should enable this to avoid cheating.
*/

antitab = false

/***************************************************************
Dummy-proof settings end here. Be careful editing.
***************************************************************/

console.log("Preparing page...")

/*
	Establish the config information,
	two arguments that will always be present,
	and checks for misc. config arguments.
*/

config = document.head.classList
site = `/subsites/${config[0]}`
audio = config[1]
ispreloaded = config.contains("preloaded")
issinglescreen = config.contains("singlescreen")
islargescene = config.contains("largescene")

/*
	Check if core site.
*/

if (site == "/subsites/core") {
	site = "/core"
	iscore = true
} else {
	iscore = false
}

/*
	Identify the page and whether it is index.
*/

page = window.location.pathname

if (page.endsWith(".html")) {
	page = page.slice(1, -5)
} else if (page.endsWith("/")) {
	page = page.slice(1, -1)
}

if (page == "") {
	page = "index"
}

if (page == "index") {
	isindex = true
} else {
	isindex = false
}

/*
	Progress-related matters.

	If progress updates too many times, overfinished
	becomes true and the issue is logged.
*/

progress = 0
finished = 3
overfinished = false
coredone = false
haspagescript = false

/*
	Default text sizes and margin modifiers.
*/

textsize = 20
xxstext = 14
xstext = 16
stext = 18
ltext = 24
xltext = 36

fontmod = 0
twmod = 0
lasttwmod = 0
hbmod = 0
hbmodnodiamonds = 0
hbmodtw = 0

ttmod = cut(fontmod, 4)
twspace = twmod + 10

/*
	Checks for Firefox and mobile.
	The mobile check involves some pretty ridiculous regex.
	If you'd like some more info, check this out:
	https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
*/

isfirefox = typeof InstallTrigger !== 'undefined'

ismobile = false;
(function(a) {
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) ismobile = true
})
(navigator.userAgent || navigator.vendor)

if (ismobile) {
	clicktap = "TAP"
} else {
	clicktap = "CLICK"	
}

/*
	Misc. declarations.
*/

counter = 0
queue = 3

subsitedone = false
pagedone = false

iconframe = 1
iconreverse = false

twpattern = 2

boxhr2 = ".box:not(.nohr)"
boxhr1 = ".sbox:not(.boximg, .nohr)"
singlehr = "<hr>"
doublehr = singlehr + singlehr

shadowtw = "p.shadowset.istw"
diamondhotbar = ".hotbar:not(.nodiamonds, .istw)"

tw1 = ""
tw2 = ""

divimg =
	`div,
	img`

dialogimg = ".dialogbox > div:first-of-type"

scrollcount = 0

/*******************************
Main script preparation.
*******************************/

/*
	Title the page after the core/subsite.
*/

if (iscore) {
	document.title = coretitle
} else {
	document.title = site.slice(10)
}

/*
	If set to, automatically detect the use of tab and redirect to a page explaining this; no cheating!
*/

if (antitab) {
	document.addEventListener("keydown", (event)=> {
		if (event.key == "Tab") {
			window.location.replace("/tab.html")
		}
	})
}

/*
	Set the loading screen unless page was prerendered.
*/

if (!ispreloaded) {
	console.log("Displaying loading screen...")

	document.body.innerHTML +=
		`<style id="loadingstyle">
			#loadingbg {
				position: fixed;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: #000000;
				-webkit-user-select: none;
				user-select: none;
				z-index: 9999;
			}
			
			#loadingfg {
				background: url(/core/images/loading.gif);
				position: fixed;
				left: 50%;
				top: 70px;
				width: 328px;
				height: 45px;
				transform: translate(-50%, 0);
				z-index: 10002;		
			}
		</style>

		<div id="loadingbg"></div>
		<div id="loadingfg"></div>`
		
	document.body.style.overflow = "hidden"
} else {
	console.log("Page was prerendered. Skipping loading screen.")
}

/*
	If the browser both isn't Firefox
	and is not a large scene page,
	begin automatic page scaling.
*/

if (islargescene) {
	console.log("Page is large scene. Page will not auto-scale.")		
} else if (isfirefox) {
	console.log("Firefox detected. Page will not auto-scale.")		
} else {
	console.log("Starting automatic page scaling...")
	setInterval(function() {
		let width = window.innerWidth
		let height = window.innerHeight

		if (width > height * 2.36) {
			zoom = height / 1080
		} else {
			zoom = width / 1920
		}

		document.body.style.zoom = zoom			
	},
	10)
}

/*
	Start loading applicable stylesheets/scripts and jQuery.
*/

corestyle = document.createElement("link")
corestyle.rel  = "stylesheet"
corestyle.onload = function() {
	console.log("Core stylesheet loaded.")

	if (!iscore) {	
		subsitestyle = document.createElement("link")
		subsitestyle.rel = "stylesheet"	
		subsitestyle.onload = function() {
			console.log("Subsite stylesheet loaded.")
			setoutputstyle()
		}	
		subsitestyle.href = `${site}/style.css`
		document.head.appendChild(subsitestyle)
	} else {
		setoutputstyle()
	}
}
corestyle.href  = "/core/style.css"
document.head.appendChild(corestyle)

/*
	Create output style tag.
*/

function setoutputstyle() {
	document.head.innerHTML += '<style id="outputstyle"></style>'
	++counter
}

jqueryscript = document.createElement("script")
jqueryscript.onload = function() {
	console.log("jQuery loaded.")
	++counter
}
jqueryscript.setAttribute("src", "/core/jquery-3.6.0.min.js")
document.head.appendChild(jqueryscript)

if (iscore) {
	++counter
} else {
	subsitescript = document.createElement("script")	
	subsitescript.onload = function() {
		console.log("Subsite script loaded.")			
		++counter
	}
	subsitescript.setAttribute("src", `${site}/script.js`)
	document.head.appendChild(subsitescript)
}

wait(loadsharedstyle)

function loadsharedstyle() {
	queue = $("link").length
	
	document.querySelectorAll("link").forEach(function(element) {
		if (element.dataset.c != undefined) {
			let name = element.dataset.c
			let path = `/stylesheets/${name}.css`
			$(element).remove()
			
			let sharedstyle = document.createElement("link")
			sharedstyle.rel = "stylesheet"
			sharedstyle.onload = function() {
				console.log(`Shared stylesheet ${name} loaded.`)
				++counter
			}	
			sharedstyle.href = path
			document.head.appendChild(sharedstyle)
		} else {
			++counter
		}
	})
	
	wait(loadsharedscripts)
}

function loadsharedscripts() {
	queue = $("script").length
	
	document.querySelectorAll("script").forEach(function(element) {
		if (element.dataset.s != undefined) {
			let name = element.dataset.s
			let path = `/scripts/shared/${name}.js`
			$(element).remove()
			
			let sharedscript = document.createElement("script")
			sharedscript.onload = function() {
				console.log(`Shared script ${name} loaded.`)
				++counter
			}	
			sharedscript.setAttribute("src", path)
			document.head.appendChild(sharedscript)
		} else {
			++counter
		}
	})
	
	wait(loadpagescript)
}

function loadpagescript() {
	pagescriptname = `/scripts/${page}.js`
	
	fileexists(pagescriptname, function(result) {
		if (result) {
			haspagescript = true

			pagescript = document.createElement("script")	
			pagescript.onload = function() {
				console.log("Page script loaded.")
				setcursor()
			}
			pagescript.setAttribute("src", pagescriptname)
			document.head.appendChild(pagescript)
		} else {
			setcursor()
		}
	})
}

function setcursor() {
	if (!cursor.length) {
		cursorpath = `${site}/`
		hoverpath = `${site}/cursor_hover/`
	} else {
		cursorpath = `/cursors/${cursor}/`
		hoverpath = `/cursors/${cursor}/hover/`
	}
	
	addstyle(
		`html {
			cursor: url(${cursorpath}cursor/frame1.png) ${cursorsize} ${cursorsize}, pointer;
		}
		
		a,
		audio::-webkit-media-controls-play-button,
		audio::-webkit-media-controls-mute-button,
		audio::-webkit-media-controls-timeline,
		audio::-webkit-media-controls-volume-slider {
			cursor: url(${hoverpath}frame1.png) ${hoversize} ${hoversize}, pointer;
		}`
	)
	
	loadfontscript()
}

function loadfontscript() {
	if (font.length) {
		fontscript = document.createElement("script")
		fontscript.onload = function() {
			console.log("Font script loaded.")
			domread()
		}
		fontscript.setAttribute("src", `/fonts/${font}/script.js`)
		document.head.appendChild(fontscript)
	} else {
		domread()
	}
}

/*
	Wait for DOM to be read.
*/

function domread() {
	if (document.readyState !== "loading") {
		stage1()
	} else {
		document.addEventListener("DOMContentLoaded", stage1())
	}
}

/***********************
Main script start.
***********************/

function stage1() {
	console.log("DOM read.")

	/*
		Set the icon, animating it if specified.
	*/
		
	if (iconanim) {
		setInterval(function() {
			if (document.querySelector('link[rel="icon"]')) {
				document.querySelector('link[rel="icon"]').remove()
			}

			seticon(iconframe)

			if (!iconalternate) {
				if (iconframe == iconframes) {
					iconframe = 1
				} else {
					++iconframe
				}
			} else {
				if (iconframe == 1) {
					iconreverse = false
				} else if (iconframe == iconframes) {
					iconreverse = true
				}
				
				if (!iconreverse) {
					++iconframe
				} else {
					--iconframe
				}
			}
		},
		250)
	} else {
		seticon(1)
	}

	/*
		Set any HTML5 audio players.
	*/

	document.querySelectorAll("audio").forEach(function(element) {
		if (element.dataset.a != undefined) {
			$(element).after(	
				`<audio controls preload="none">
					<source src=/sounds/${element.dataset.a}.mp3>
				</audio>`
			)
			
			$(element).remove()
		}
	})

	/*
		Class-grouping and other misc. preparation.
	*/

	body = $("body")

	$(
		`.dialogboxr,
		.dialogboxl`
	).addClass("dialogbox")

	$(
		`.boximg,
		.dialogbox`
	).addClass("sbox")
	
	$(
		`.box,
		.sbox`
	).addClass("boxset")

	$(
		`.set,
		.setx,
		.setov,
		.sticky,
		.stickyx,
		.stickyov,
		.bgset,
		.bgsetx,
		.bgsetov`
	).addClass("nopimg")

	$(
		`p,
		div:has(p),
		i:has(p),
		b:has(p)`
	).not(
		`.nopimg,
		.boxset,
		.colors >`
	).not(":has(.nopimg)").addClass("p")
	
	$(".tooltip > span").addClass("tooltiptext stext")

	$(
		`[class$="shadow"],
		[class*="shadow "],
		[class$="shadow"] > .p,
		[class*="shadow "] > .p`
	).not("#matrix").addClass("shadowset")

	$(
		`.returntl,
		.returntr,
		.returnbl,
		.returnbr`
	).addClass("return")

	returnbutton = $(".return")

	$(
		`img,
		div:has(img),
		a:has(img),
		a:has(div),
		audio,
		iframe,
		.dialogbox > div:first-of-type,
		.tooltip,
		#wave`
	).not(
		`p > *,
		.boxset,
		.runes,
		.runes > *,
		.nopimg,
		[id*='floating']`
	).not(":has(p, .runes, .return, .nopimg)").addClass("img")

	$(
		`[class^="twinkle"],
		[class*=" twinkle"]`
	).addClass("istw")
	
	$(".hotbar.istw")
		.prepend(" | ")
		.append(" | ")

	$(
		`.bg,
		.bgx,
		.bgov,
		.bgfree,
		.bgfreex,
		.bgfreeov`
	).not(
		`.coverh,
		.coverv`
	).addClass("cover")
	
	$(
		`.rotp90,
		.rotn90`
	).addClass("rot")
	
	$(".movingtext").wrapInner("<span></span>")
	$("[id*='floating']").addClass("floating")

	$(".typingtext")
		.wrapInner('<div id="typingtext"></div>')
		.prepend('<div id="typingtextset"></div>')

	fontset = $(
		`body,
		.p,
		.tooltiptext,
		.movingtext,
		#matrix,
		#wave`
	)

	/*
		Apply horizontal lines.
	*/

	if (!nohr) {		
		$(boxhr2)
			.prepend(doublehr)
			.append(doublehr)
		$(boxhr1)
			.prepend(singlehr)
			.append(singlehr)
	} else {
		$(".boxset:not(.boximg)").css("padding-bottom", "25px")
	}

	hrlist = $("hr")

	if (hrlist.length) {
		findimg("hr", function(result) {
			if (result != "notfound") {
				hrlist.css("background", `url(${result})`)
			}

			if (!nohranim) {
				hrlist
					.addClass("anim")
					.css("animation-name", "hr")
			}
			
			++counter
		})
	} else {
		++counter
	}

	/*
		Apply hotbar diamonds.
	*/

	if (!nodiamonds && $(diamondhotbar).length) {
		findimg("dl", function(dl) {
			findimg("dr", function(dr) {
				
				$(diamondhotbar)
					.prepend(`<span class="d dl" style="background: url(${dl});"></span> |`)
					.append(`| <span class="d dr" style="background: url(${dr});"></span>`)
					
				++counter
			})
		})
	} else {
		++counter
	}

	/*
		Apply twinkles.
	*/

	if ($(".istw").length) {
		findimg("tw", function(result) {
			document.querySelectorAll(".istw").forEach(function(element) {
				let twcount = 0
				let twwidth = 0
				let twspace = ""
				let twalt =  ""
				
				element.classList.forEach(function(arg) {
					if (arg.startsWith("twinkle")) {
						if (arg.charAt(8).length && arg.charAt(8) != "s") {
							twcount = arg.slice(7, 9)
						} else {
							twcount = arg.charAt(7)
						}

						twwidth = (twcount * 25) - 10

						if (arg.endsWith("space")) {
							twspace = " space"
						}
						
						$(element).removeClass(arg)
					}
				})
				
				if (twpattern == 2) {
					twpattern = 1
				} else {
					twpattern = 2
					twalt = " background-position: 25px 0;"
				}

				$(element)
					.prepend(`<span class="tw twl${twspace}" style="background: url(${result}); width: ${twwidth}px;${twalt}"></span>`)
					.append(`<span class="tw twr${twspace}" style="background: url(${result}); width: ${twwidth}px;${twalt}"></span>`)
			})

			++counter
		})
	} else {
		++counter
	}

	/*
		Apply corners.
	*/

	if ($(".c").length) {
		findimg("c", function(result) {
			$(
				`<img src="${result}" class="ctl">
				<img src="${result}" class="ctr">`
			).insertBefore(".c")		

			$(
				`<img src="${result}" class="cbl">
				<img src="${result}" class="cbr">`
			).insertAfter(".c")

			++counter
		})
	} else {
		++counter
	}

	/*
		Apply dialog borders.
	*/

	if ($(".dialogbox").length) {
		findimg("dialog_border", function(result) {
			$(dialogimg).append(
				`<div class="cover dialogborder" style="background: url(${result});">`
			)
			
			++counter
		})
	} else {
		++counter
	}

	/*
		Apply return button.
	*/

	if (returnbutton.length) {
		findimg("return", function(img) {
			findimg("return-hover", function(imghover) {
				addstyle(
					`.returnimg {
						background: url(${img});
					}
					
					.returnimg:hover {
						background: url(${imghover});
					}`
				)

				returnbutton.append(
					`<div class="returnimg"></div>`
				)	
	
				++counter
			})
		})
	} else {
		++counter
	}

	/*
		Wait for the above to be handled.
	*/

	queue = 6
	wait(stage2)
}

function stage2() {
	/*
		Set unset colors.
	*/

	if (!ccolor.length) {
		ccolor = color1
	}

	if (!twcolor.length) {
		twcolor = color1
	}

	if (!bordercolor.length) {
		bordercolor = color1
	}

	if (!returnbuttoncolor.length) {
		returnbuttoncolor = color1
	}

	if (!scrollbarbordercolor.length) {
		scrollbarbordercolor = bordercolor
	}

	if (!dialogbordercolor.length) {
		dialogbordercolor = bordercolor
	}

	if (!scrollbarcolor.length) {
		scrollbarcolor = color2
	}

	if (!shadowcolor.length) {
		shadowcolor = color2
	}

	if (!groovycolor1.length) {
		groovycolor1 = color2
	}
	
	if (!audiocolor.length) {
		audiocolor = color2
	}
	
	if (!groovycolor2.length) {
		groovycolor2 = color3
	}

	/*
		Set global shadows for text and/or boxes as well as borders, if applicable.
	*/

	if (!noborder) {
		$(
			`.boxset,
			.tooltiptext,
			iframe`
		).not(
			`.noborder,
			[class$="border"],
			[class*="border "],
			[class$="border"] > .boxset,
			[class*="border "] > .boxset,
			[class$="border"] > .tooltiptext,
			[class*="border "] > .tooltiptext`
		).addClass(`${bordercolor}border`)
	}

	if (shadow.length) {
		fontset.not(
			`.noshadow,
			.shadowset`
		).addClass(`${shadow}shadow shadowset`)
	}

	if (boxshadow.length) {
		$(
			`.boxset,
			.tooltiptext,
			.return`
		).not(
			`[class$="shadowb"],
			[class*="shadowb "],
			[class$="shadowb"] > .boxset,
			[class*="shadowb "] > .boxset,
			[class$="shadowb"] > .tooltiptext,
			[class*="shadowb "] > .tooltiptext,
			[class$="shadowb"] > .return,
			[class*="shadowb "] > .return`
		).addClass(`${boxshadow}shadowb`)
		
		$(".shadowb").addClass(`${boxshadow}shadowb`)
	} else {
		$(".shadowb").addClass("blackshadowb")
	}

	/*
		Check the page to see if it uses any of the colors
		in the palette defined previously. If it does, prepare
		style accordingly.
		
		Filters still need to be handled manually.
		
		This is also where the core/subsite color names get turned into
		their hex counterparts so that they may be used.
	*/

	colors.forEach(function(color) {
		let colorname = color.slice(0, -8)
		let colorhex = color.slice(-7)
		let colordark = ""

		let hascolortext = false
		let hascolorhover = false
		let hascolorborder = false
		let hascolorshadow = false
		let hascolorboxshadow = false
		let hascolorscrollbar = false
		let isgroovydark1 = false
		let isaudiodark = true
		let isgroovydark2 = false

		let colortext = `${colorname}text`
		let colorhover = `${colorname}hover`
		let colorborder = `${colorname}border`
		let colorshadow = `${colorname}shadow`	
		let colorboxshadow = `${colorname}shadowb`

		let scolorborder = $(`.${colorborder}`)
		let scolorshadow = $(`.${colorshadow}`)		
		let scolorboxshadow = $(`.${colorboxshadow}`)	

		if ($(`.${colorname}text:not(.dark)`).length) {
			hascolortext = true
		}

		if ($(`.${colorname}hover`).length) {
			hascolorhover = true
		}

		if (scolorborder.length) {
			hascolorborder = true
		}

		if (scolorshadow.length) {
			hascolorshadow = true
		}

		if (scolorboxshadow.length) {
			hascolorboxshadow = true
		}

		if (!noscrollbarcolor && colorname == scrollbarcolor) {
			hascolorscrollbar = true
		}

		if (colorname == groovycolor1 && groovydark1) {
			isgroovydark1 = true
		}

		if (colorname == audiocolor && audiodark) {
			isaudiodark = true
		}

		if (colorname == groovycolor2 && groovydark2) {
			isgroovydark2 = true
		}

		if (colorname == color1 || colorname == color2 || colorname == color3 || hascolorscrollbar || isgroovydark1 || isaudiodark || isgroovydark2 || hascolortext || hascolorhover) {
			colordark = darken(colorhex)
		}

		if (colorname == color1) {
			body.css("color", colorhex)
			
			addstyle(
				`::selection {
					color: ${colordark};
				}

				.invisible::selection,
				.invisible > ::selection,
				.invisible > * > ::selection,
				.invisible > * > * > ::selection,
				.invisible > * > * > * > ::selection {
					color: ${colorhex};
				}`
			)
			
			color1 = colorhex
		}

		if (colorname == color2) {
			addstyle(
				`a {
					color: ${colorhex};
				}
				
				a::selection,
				.locked {
					color: ${colordark};
				}
				
				.locked::selection {
					color: ${darken(colordark)};
				}`
			)
			
			color2 = colorhex
		}

		if (colorname == color3) {
			addstyle(
				`a:hover {
					color: ${colorhex};
				}

				a:hover::selection {
					color: ${colordark};
				}`
			)
			
			color3 = colorhex
		}

		if (colorname == twcolor) {
			$(".tw").addClass(colorname)
		}

		if (colorname == ccolor) {
			$(
				`.ctl,
				.ctr,
				.cbl,
				.cbr`
			).addClass(colorname)
		}

		if (colorname == returnbuttoncolor) {
			$(".returnimg").addClass(colorname)
		}

		if (!noscrollbarborder && colorname == scrollbarbordercolor) {
			addstyle(
				`::-webkit-scrollbar-track {
					border: solid 1px ${colorhex};
				}

				::-webkit-scrollbar-thumb {
					outline: solid 1px ${colorhex};
				}
				
				::-webkit-scrollbar-corner {
					background: ${colorhex};
				}`
			)
		}

		if (colorname == dialogbordercolor) {
			$(".dialogborder").addClass(colorname)
		}

		if (!noscrollbarcolor && colorname == scrollbarcolor) {
			addstyle(
				`::-webkit-scrollbar-thumb {
					background: ${colorhex};
				}
				
				::-webkit-scrollbar-thumb:hover {
					background: ${colordark};
				}`
			)
		}

		if (colorname == shadowcolor) {
			addstyle(
				`.shadow {
					text-shadow: 0 0.5em 0.6em ${colorhex};
				}`
			)
		}
		
		if (colorname == groovycolor1) {
			if (groovydark1) {
				groovycolor1 = colordark
			} else {
				groovycolor1 = colorhex
			}
		}
		
		if (colorname == audiocolor) {
			if (audiodark) {
				addstyle(
					`audio::-webkit-media-controls-panel {
						background: ${colordark};
					}`
				)
			} else {
				addstyle(
					`audio::-webkit-media-controls-panel {
						background: ${colorhex};
					}`
				)
			}
		}
		
		if (colorname == groovycolor2) {
			if (groovydark2) {
				groovycolor2 = colordark
			} else {
				groovycolor2 = colorhex
			}
		}

		if (hascolortext) {
			addstyle(
				`.${colortext} {
					color: ${colorhex};
				}
				
				.${colortext}::selection,
				.${colortext} > ::selection:not(a),
				.${colortext} > * > ::selection:not(a),
				.${colortext} > * > * > ::selection:not(a),
				.${colortext} > * > * > * > ::selection:not(a) {
					color: ${colordark};
				}`
			)
		}

		if (hascolorhover) {
			addstyle(
				`.${colorhover}:hover {
					color: ${colorhex};
				}
				
				.${colorhover}:hover::selection,
				.${colorhover} > :hover::selection,
				.${colorhover} > * > :hover::selection,
				.${colorhover} > * > * > :hover::selection,
				.${colorhover} > * > * > * > :hover::selection {
					color: ${colordark};
				}`
			)
		}

		if (hascolorborder) {
			scolorborder.css("border", `solid 1px ${colorhex}`)
			removeclass(colorborder)
		}

		if (hascolorshadow) {
			addstyle(
				`.${colorshadow} {
					text-shadow: 0 0.5em 0.6em ${colorhex};
				}`
			)
		}

		if (hascolorboxshadow) {
			scolorboxshadow.css("box-shadow", `0 0 6px 6px ${colorhex}BF`)
			removeclass(colorboxshadow)
		}
	})

	/*
		Set colors for "groovy text."
	*/

	if ($(".groovytext").length) {
		addstyle(
			`@keyframes groovytext {
				0% {
					text-shadow:
						4px -4px 0 ${groovycolor1},
						3px -3px 0 ${groovycolor1},
						2px -2px 0 ${groovycolor1},
						1px -1px 0 ${groovycolor1},
						-4px 4px 0 ${groovycolor2},
						-3px 3px 0 ${groovycolor2},
						-2px 2px 0 ${groovycolor2},
						-1px 1px 0 ${groovycolor2};
				}
				25% {
					text-shadow:
						-4px -4px 0 ${groovycolor2},
						-3px -3px 0 ${groovycolor2},
						-2px -2px 0 ${groovycolor2},
						-1px -1px 0 ${groovycolor2},
						4px 4px 0 ${groovycolor1},
						3px 3px 0 ${groovycolor1},
						2px 2px 0 ${groovycolor1},
						1px 1px 0 ${groovycolor1};
				}
				50% {
					text-shadow:
						-4px 4px 0 ${groovycolor1},
						-3px 3px 0 ${groovycolor1},
						-2px 2px 0 ${groovycolor1},
						-1px 1px 0 ${groovycolor1},
						4px -4px 0 ${groovycolor2},
						3px -3px 0 ${groovycolor2},
						2px -2px 0 ${groovycolor2},
						1px -1px 0 ${groovycolor2};
				}
				75% {
					text-shadow:
						4px 4px 0 ${groovycolor2},
						3px 3px 0 ${groovycolor2},
						2px 2px 0 ${groovycolor2},
						1px 1px 0 ${groovycolor2},
						-4px -4px 0 ${groovycolor1},
						-3px -3px 0 ${groovycolor1},
						-2px -2px 0 ${groovycolor1},
						-1px -1px 0 ${groovycolor1};
				}
				100% {
					text-shadow:
						4px -4px 0 ${groovycolor1},
						3px -3px 0 ${groovycolor1},
						2px -2px 0 ${groovycolor1},
						1px -1px 0 ${groovycolor1},
						-4px 4px 0 ${groovycolor2},
						-3px 3px 0 ${groovycolor2},
						-2px 2px 0 ${groovycolor2},
						-1px 1px 0 ${groovycolor2};
				}
			}`
		)
	}

	/*
		Set font.	
	*/

	document.querySelectorAll(
		`.p,
		.p > *`
	).forEach(function(element) {
		if ($(element).css("font-size") != "20px") {
			$(element).addClass("textsizeset")
		}
	})

	if (font.length) {	
		addstyle(
			`@font-face {
				font-family: ${font};
				src: url(/fonts/${font}/font.woff);
			}`
		)

		fontset.css("font-family", font)

		fontset.not(
			`.xxstext >,
			.xstext >,
			.stext >,
			.ltext >,
			.xltext >,
			.textsizeset`
		).css("font-size", `${textsize}px`)
	}
	
	$(".xxstext").css("font-size", `${xxstext}px`)
	$(".xstext").css("font-size", `${xstext}px`)
	$(".stext").css("font-size", `${stext}px`)
	$(".ltext").css("font-size", `${ltext}px`)
	$(".xltext").css("font-size", `${xltext}px`)

	/*
		Set the modifiers for vertically aligning text.
	*/

	$(".p + hr").css("margin-top", `${37 + fontmod}px`)
	$(".p + .img").css("margin-top", `${7 + fontmod}px`)
	$(".p + .runes").css("margin-top", `${32 + fontmod}px`)
	$(".boxset > .p:first-child").css("margin-top", `${30 - fontmod}px`)

	$("hr + #matrix").css("margin-top", `${-25 - fontmod}px`)
	$(".boxset > #matrix:first-child").css("margin-top", `${-15 - fontmod}px`)
	$(".boxset > #matrix:last-child").css("margin-bottom", `${-17 - fontmod}px`)

	if (!iscore) {
		$(".twl").css("margin-right", `${twmod}px`)
		$(".twr").css("margin-left", `${twmod}px`)
	}
	
	$(".twl.space").css("margin-right", `${twspace}px`)
	$(".twr.space").css("margin-left", `${twspace}px`)

	$(".istw + hr").css("margin-top", `${34 + lasttwmod}px`)
	$(".istw + .img").css("margin-top", `${4 + lasttwmod}px`)
	$(".istw + .runes").css("margin-top", `${29 + lasttwmod}px`)
	$(".boxset > .istw:last-child").css("margin-bottom", `${27 - fontmod + lasttwmod}px`)
	
	$(".shadowset:not(#matrix) + hr").css("margin-top", `${44 + fontmod}px`)
	$(".shadowset + .img").css("margin-top", `${12 + fontmod}px`)
	$(".shadowset + .runes").css("margin-top", `${39 + fontmod}px`)
	$(".boxset > .shadowset:last-child").css("margin-bottom", `${37 - fontmod}px`)
	
	$(`${shadowtw} + hr`).css("margin-top", `${41 + lasttwmod}px`)
	$(`${shadowtw} + .img`).css("margin-top", `${9 + lasttwmod}px`)
	$(`${shadowtw} + .runes`).css("margin-top", `${36 + lasttwmod}px`)
	$(`boxset > ${shadowtw}:last-child`).css("margin-bottom", `${34 - fontmod + lasttwmod}px`)

	if (!nodiamonds) {
		$(".hotbar + hr").css("margin-top", `${-15 + hbmod}px`)
		$(".hotbar.nodiamonds + hr").css("margin-top", `${-18 + hbmodnodiamonds}px`)
	} else {
		$(".hotbar + hr").css("margin-top", `${-18 + hbmodnodiamonds}px`)
	}

	$(".hotbar.istw + hr").css("margin-top", `${-18 + hbmodtw}px`)
	
	$(".tooltiptext").css("padding-bottom", `${16 + ttmod}px`)
	$(".tooltiptext.shadowset").css("padding-bottom", `${22 + ttmod}px`)

	/*
		Prepare style for large scene and single-screen pages.
	*/

	if (issinglescreen) {
		$(
			`body,
			.cover,
			.coverh`
		).css("width", "1920px")

		$(
			`body,
			.cover,
			.coverv`
		).css("height", "1080px")

		$(
			`.rot.cover,
			.rot.coverh`
		).css("width", "1080px")

		$(
			`.rot.cover,
			.rot.coverv`
		).css("height", "1920px")

		$(
			`.bg,
			.bgx,
			.bgov`
		).css("position", "absolute")
		
		$(".boxset").css("margin-top", "0")

		if (ispreloaded) {
			body.css("overflow", "hidden")
		}
	}

	/*
		Prepare shorthand for animation duration.
	*/

	document.querySelectorAll('[class*="dur"]').forEach(function(element) {
		element.classList.forEach(function(arg) {
			if (arg.startsWith("dur")) {
				let dur = arg.slice(3)
				element.style.animationDuration = `${dur}s`
				$(element).removeClass(arg)
				$(element).addClass("durset")
			}
		})
	})	

	/*
		Convert provided image names into usable URLs, set dimensions
		of divs with background images, and prepare shorthand for scrolling animations.
	*/

	queue = $(divimg).length

	document.querySelectorAll(divimg).forEach(function(element) {
		let width = ""
		let height = ""
		let xdistance = 0
		let ydistance = 0
		let rcount = 0
		let classes = element.classList

		if (element.dataset.i != undefined) {
			let name = element.dataset.i		
			let type = ""
			let gif = `/images/${name}.gif`
			let png = `/images/${name}.png`

			if ($(element).is("div")) {
				let divname = `i_${name.replace(/\//g, "X")}`

				if (!$(`.${divname}`).length) {
					$(element).addClass(divname)

					gettype(function() {
						addstyle(
							`.${divname} {
								background: url(${type});
							}`
						)
						
						if (!$(element).is(
							`.bg,
							.bgx,
							.bgov,
							.bgfree,
							.bgfreex,
							.bgfreeov,
							.coverh,
							.coverv,
							${dialogimg}`
						)) {
							gif = `/images/${name}-hover.gif`
							png = `/images/${name}-hover.png`

							fileexists(gif, function(result) {
								if (result) {
									type = gif
									sethover()
								} else {
									fileexists(png, function(result) {
										if (result) {
											type = png
											sethover()
										} else {
											setsize()
										}
									})
								}
							})
						} else {
							setsize()
						}
					})
				} else {
					$(element).addClass(divname)
					setsize()
				}

				function sethover() {
					addstyle(
						`.${divname}:hover {
							background: url(${type});
						}`
					)
					
					setsize()
				}
			} else {
				let imgclass = `img_${name.replace(/\//g, "X")}`
				
				document.querySelectorAll("img").forEach(function(element) {
					if ($(element).attr("data-i") == name) {
						$(element).addClass(imgclass)
						$(element).removeAttr("data-i")
					}
				})
				
				gettype(function() {
					element.onload = function() {
						++counter
					}

					document.querySelectorAll(`.${imgclass}`).forEach(function(element) {
						element.src = `${type}`
						$(element).removeClass(imgclass)
					})
				})
			}

			function gettype(callback) {
				fileexists(gif, function(result) {
					if (result) {
						type = gif
					} else {
						type = png
					}

					callback()
				})
			}
		} else {
			++counter
		}

		function setsize() {
			let checksize = setInterval(function() {
				width = $(element).css("width")
				height = $(element).css("height")
				
				if (width.includes("px") && height.includes("px")) {
					setsizescroll()
					clearInterval(checksize)
				}
			},
			10)
		}
		
		function setsizescroll() {
			getsize(element, function(size) {
				if (width == "0px") {
					$(element).css("width", size[0])
				}
				if (height == "0px") {
					$(element).css("height", size[1])
				}
				
				width = size[0]
				height = size[1]
				
				if ($(element).is('[class*="scroll"]')) {
					classes.forEach(function(arg) {
						if (arg.includes("scroll")) {
							if (arg.match("(tlscroll|trscroll|blscroll|brscroll)")) {
								if (arg.startsWith("t")) {
									ydistance = `-${height}`
								} else {
									ydistance = height
								}

								if (arg.charAt(1) == "l") {
									xdistance = `-${width}`
								} else {
									xdistance = width
								}
							} else if (arg.match("(lscroll|rscroll|tscroll|bscroll)")) {
								if (arg.length > 7) {
									mul = arg.slice(7)
								} else {
									mul = 1
								}

								if (arg.startsWith("l")) {
									xdistance = `-${width.slice(0, -2) * mul}px`
								} else if (arg.startsWith("r")) {
									xdistance = `${width.slice(0, -2) * mul}px`
								} else if (arg.startsWith("t")) {
									ydistance = `-${height.slice(0, -2) * mul}px`
								} else {
									ydistance = `${height.slice(0, -2) * mul}px`
								}
							}
						}
					})

					removearg()

					function removearg() {
						classes.forEach(function(arg) {
							if (arg.includes("scroll")) {
								$(element).removeClass(arg)
							}
						})
						
						++rcount
						
						if (rcount < 2) {
							removearg()
						}
					}
			
					++scrollcount
					$(element).addClass(`scrollset${scrollcount}`)

					addstyle(
						`@keyframes scroll${scrollcount} {
							from {
								background-position: 0 0;
							}
							to {
								background-position: ${xdistance} ${ydistance};
							}
						}`
					)
				}

				$(element).removeAttr("data-i")
				++counter
			})
		}
	})

	/*
		Load any effect scripts used by the page.
	*/
	
	if (window.hasOwnProperty("snowCharacter")) {
		effectscript("snowstorm")
	}

	if (window.hasOwnProperty("starcharacter")) {
		effectscript("starwarp")
	}

	if (window.hasOwnProperty("fallingimg")) {
		effectscript("fallingimg")
	}

	if ($("#wave").length) {
		effectscript("wave")
	}

	if ($("#circletext").length) {
		effectscript("circletext")
	}

	if ($("#matrix").length) {
		effectscript("matrix")
	}

	if ($(".typingtext").length) {
		effectscript("typingtext")
	}
	
	if ($("#floating1").length) {
		effectscript("floatingimg")
	}

	/*
		The config's second class will always either be the name of
		the page's audio file or "noaudio." If it's not the latter,
		append the audio file. If autoplay fails, create
		a popup that will play the audio upon dismissal.
		
		I've rewritten most of it, but special thanks to Daydun
		for creating the original version of this script,
		found on angusnicneven.com. 		
	*/

	if (audio == "noaudio") {
		progupd()
	} else {
		body.append(
			`<audio id="autoplay" loop>
				<source src="/sounds/${audio}.mp3">
			</audio>`
		)

		autoplay = document.getElementById("autoplay")
		cantplay = autoplay.play()

		if (!cantplay) {
			nowplaying()
		} else {
			let doespopup = false
			cantplay
				.catch(function() {
					console.log("Autoplay failed. Displaying popup...")
					doespopup = true

					body.append(
						`<div id="audiocover" class="popup">
							<img src="/core/images/audio.gif" class="set centerh audioimg">
							<p class="set centerh audiotext">
								PLEASE ${clicktap} ANYWHERE TO CONTINUE.</br>
								IF YOU DON'T WANT TO KEEP SEEING THIS, ALLOW THIS SITE TO AUTOPLAY AUDIO!
							</p>
						</div>`
					)

					$("#audiocover").click(function() {
						fadeout("audiocover")
						autoplay.play()
						nowplaying()
					})
				})
				.finally(function() {
					if (!doespopup) {
						nowplaying()		
					}
				})
		}

		function nowplaying() {
			console.log("Now playing audio.")
			progupd()
			
			setInterval(function() {
				if (autoplay.paused) {
					autoplay.play()
				}
			},
			10)
		}
	}
	
	/*
		There are two checks that should be performed only on
		the index; checks for Firefox and mobile. If either
		are detected, a dismissable warning should be presented,
		as opposed to the IE check's hard lockout.
	*/

	if (isindex) {
		check = false
		if (ismobile) {
			console.log("Mobile detected on index. Displaying warning...")

			checkpopup(
				"mobile",
				"A MOBILE DEVICE",
				"REVISITING FROM A DESKTOP COMPUTER"
			)
		} else if (isfirefox) {
			console.log("Firefox detected on index. Displaying warning...")

			checkpopup(
				"firefox",
				"FIREFOX",
				"USING A CHROMIUM-BASED BROWSER"
			)
		}

		if (!check) {
			progupd()
		} else {
			$("#checkcover").click(function() {
				fadeout("checkcover")
				console.log("Warning dismissed.")
				progupd()
			})
		}
	} else {
		progupd()
	}

	/*
		Wait for images and effect scripts to be processed.
	*/

	wait(stage3)
}

function stage3() {
	/*
		Apply the calculated scrolling animations, in sync.
	*/

	document.querySelectorAll('[class*="scrollset"]').forEach(function(element) {
		element.classList.forEach(function(arg) {
			if (arg.startsWith("scrollset")) {
				element.style.animationName = `scroll${arg.slice(9)}`
				$(element).removeClass(arg)
				$(element).addClass("anim")
			}
		})
	})

	/*
		Apply any remaining animations.
	*/
	
	$(
		`hr,
		.animr,
		.durset,
		.spin,
		.groovytext`
	).addClass("anim")
	
	/*
		If loading screen was set, dismiss it upon page readiness.
	*/

	if (!ispreloaded) {
		if (document.readyState !== "complete") {
			$(window).on("load", function() {
				removeloading()
			})
		} else {
			removeloading()
		}
	} else {
		finish()
	}

	function removeloading() {
		console.log("Page has loaded.")

		fadeout("loadingbg")
		fadeout("loadingfg")

		setTimeout(function() {
			$("#loadingstyle").remove()
		},
		2000)

		if (!issinglescreen) {
			body.css("overflow", "")
		}

		finish()
	}
}

function finish() {	
	/*
		If page is index, cache effect scripts and fonts.
	*/

	if (isindex) {
		console.log("Page is index. Caching effect scripts and fonts...")

		cacheeffectscripts = [
			"snowstorm",
			"starwarp",
			"wave",
			"circletext",
			"matrix",
			"typingtext",
			"floatingimg",
			"fallingimg"
		]

		cachefonts = [
			"epson_futo_mincho"
		]

		cacheeffectscripts.forEach(function(name) {
			newprefetch(`/scripts/effect/${name}.js`)
		})
	
		cachefonts.forEach(function(name) {
			newprefetch(`/fonts/${name}/font.woff`)
		})
		
		function newprefetch(name) {
			let prefetch = document.createElement("link")
			prefetch.rel  = "prefetch"
			prefetch.href  = name
			document.head.appendChild(prefetch)
		}
	}

	/*
		Clean up output markup to ease inspecting the page.
	*/
	
	console.log("Cleaning up output markup...")

	$("head").removeAttr("class")

	usedclasses = [
		"nopimg",
		"xxstext",
		"xstext",
		"stext",
		"ltext",
		"xltext",
		"textsizeset",
		"noshadow",
		"shadow",
		"shadowset",
		"nohr",
		"nodiamonds",
		"twl",
		"twr",
		"c",
		"dialogbox",
		"durset"
	]
	
	usedclasses.forEach(function(name) {
		removeclass(name)
	})
	
	progupd()
	coredone = true
	
	if (iscore) {
		subsitedone = true
	}
	
	if (!haspagescript) {
		pagedone = true
	}
}

/*******************************
Hoisted functions start here.
*******************************/

/*
	Wait for async functions to complete.
*/

function wait(callback) {
	let checkqueue = setInterval(function() {
		if (counter == queue) {
			counter = 0
			callback()
			clearInterval(checkqueue)
		}
	},
	10)
}

/*
	Set favicon.
*/

function seticon(frame) {
	let icon = document.createElement("link")
	icon.rel  = "icon"
	icon.href = `${site}/icon/frame${frame}.png`
	document.head.appendChild(icon)
}

/*
	Append additional style.
*/

function addstyle(style) {
	$("#outputstyle").append(`\n${style}`)
}

/*
	Darken a given color.
	If the color is black (#000000,) brighten it instead.

	Originally derived from here:
	https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
*/

function darken(color) {
	if (color != "#000000") {
		color = color.slice(1)
		let colorint = parseInt(color, 16)
		let rbase = (colorint >> 16)
		let gbase = (colorint & 0x0000FF)
		let bbase = ((colorint >> 8) & 0x00FF)
		let rdark = cut(rbase, 3)
		let gdark = cut(gbase, 3)
		let bdark = cut(bbase, 3)

		let darkcolor = "000000" + (gdark | (bdark << 8) | (rdark << 16)).toString(16)
		return ("#") + darkcolor.substr(darkcolor.length - 6)
	} else {
		return "#545454"
	}
}

/*
	"Cut down" a value.
*/

function cut(dividend, divisor) {
	return dividend - Math.round(dividend / divisor)
}

/*
	Load core images in such a manner that subsites may replace them.
*/

function findimg(name, callback) {
	let iname = ""
	let gif = ""
	let png = ""
	
	if (!iscore) {
		iname = `${site}/images/${name}`
		gif = `${iname}.gif`
		png = `${iname}.png`

		fileexists(gif, function(result) {
			if (result) {
				result = gif
				callback(result)
			} else {
				fileexists(png, function(result) {
					if (result) {
						result = png
						callback(result)
					} else {
						coreimg()
					}
				})
			}
		})
	} else {
		coreimg()
	}
	
	function coreimg() {
		iname = `/core/images/${name}`
		gif = `${iname}.gif`
		png = `${iname}.png`
		
		fileexists(gif, function(result) {
			if (result) {
				result = gif
				callback(result)
			} else {
				fileexists(png, function(result) {
					if (result) {
						result = png
						callback(result)
					} else {
						result = "notfound"
						callback(result)
					}
				})
			}	
		})
	}
}

/*
	Check if a file exists.
*/

function fileexists(path, callback) {
	let http = new XMLHttpRequest()

	http.onreadystatechange = function() {
		if (this.readyState === this.DONE) {
			let result = http.status != 404
			callback(result)
		}
	}

	http.open("HEAD", `${path}`)
	http.send()
}

/*
	Get dimensions of a background image.
*/

function getsize(element, callback) {
	let img = ""

	let geturl = setInterval(function() {
		img = $(element).css("background-image")

		if (img != "none" && !img.includes("cross-fade")) {
			getsize()
			clearInterval(geturl)
		}
	},
	10)
	
	function getsize() {
		let tempimg = new Image()

		tempimg.onload = function() {
			let size = [
				`${tempimg.naturalWidth}px`,
				`${tempimg.naturalHeight}px`
			]
			tempimg.remove()
			callback(size)
		}
		
		tempimg.src = img
			.replace("url(", "")
			.replace(")", "")
			.replace('"', "")
			.replace('"', "")
			.replace("'", "")
			.replace("'", "")
	}
}

/*
	Run another script.
*/

function effectscript(name) {
	--counter
	let script = document.createElement("script")
	
	script.onload = function() {
		console.log(`Effect script ${name} loaded.`)
		++counter
	}
	
	script.src  = `/scripts/effect/${name}.js`
	document.head.appendChild(script)
}

/*
	Remove all instances of a class.
*/

function removeclass(name) {
	$(`.${name}`).removeClass(name)
}

/*
	Create a client-checking popup.
*/

function checkpopup(img, using, consider) {
	body.append(
		`<div id="checkcover" class="popup">
			<img src="/core/images/${img}.gif" class="set centerh checkimg">
			<div class="set centerh checktext">
				<p>
					IT LOOKS LIKE YOU'RE USING ${using}. YOU MAY PROCEED,<br>
					BUT YOU MAY OR MAY NOT RUN INTO PROBLEMS.
				</p>
				<p>
					IF YOU CAN, CONSIDER ${consider},<br>
					AS ANY POTENTIAL ISSUES <span class="redtext">WILL NOT BE FIXED.</span>
				</p>
				<p>
					PLEASE ${clicktap} ANYWHERE TO CONTINUE.
				</p>
			</div>
		</div>`
	)

	check = true
}

/*
	Fade out popups.
*/

function fadeout(id) {
	id = $(`#${id}`)
	
	id.fadeOut(500, function() {
		id.remove()
	})
}

/*
	Increment the progress value and
	eventually log that the page is ready.
*/

function progupd() {
	++progress
	if (progress == finished) {
		console.log(`Page is ready at ${progress}.`)
	} else if (progress > finished && !overfinished) {
		console.log(`Too many progress updates at ${progress}.\nMake sure that the subsite updates the finished value!`)
		overfinished = true
	} else if (overfinished) {
		console.log(`Continued excess progress updates at ${progress}.`)
	}
}

/*
	For other scripts to use, awaiting the completion of other stages.
*/

function corewait(callback) {
	let checkcoredone = setInterval(function() {
		if (coredone) {
			callback()
			clearInterval(checkcoredone)
		}
	},
	10)
}

function subsitewait(callback) {
	let checksubsitedone = setInterval(function() {
		if (subsitedone) {
			callback()
			clearInterval(checksubsitedone)
		}
	},
	10)
}

function pagewait(callback) {
	let checkpagedone = setInterval(function() {
		if (pagedone) {
			callback()
			clearInterval(checkpagedone)
		}
	},
	10)
}

/*
	Run function on page load. For use in effect scripts.
*/

function loadwait(callback) {
	if (!ispreloaded && document.readyState !== "complete") {
		$(window).on("load", function() {
			callback()
		})
	} else {
		callback()
	}
}