interface AccordionProps {
    /** Accordion Summary */
    summary: string;
    /** Accordion Content */
    children: React.ReactNode;
    /** Accordion Custom Class(es) */
    className?: string;
}
/** Accordion component can display summary and content with open and closed arrow options */
declare const Accordion: (props: AccordionProps) => JSX.Element;

interface BlockquoteProps {
    /** Blockquote children details */
    children: React.ReactNode;
    /** Blockquote cite url title and description */
    cite?: {
        url: string;
        title: string;
        description: string;
    };
    /** Blockquote custom class name */
    className?: string;
}
/** A blockquote indicates that the enclosed text is an extended quotation, and can be used to draw more attention to content like testimonials. */
declare const Blockquote: (props: BlockquoteProps) => JSX.Element;

declare const fa_standard_icons: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "360-degrees", "a", "abacus", "accent-grave", "acorn", "address-book", "address-card", "air-conditioner", "airplay", "alarm-clock", "alarm-exclamation", "alarm-plus", "alarm-snooze", "album", "album-circle-plus", "album-circle-user", "album-collection", "album-collection-circle-plus", "album-collection-circle-user", "alicorn", "alien", "alien-8bit", "align-center", "align-justify", "align-left", "align-right", "align-slash", "alt", "amp-guitar", "ampersand", "anchor", "anchor-circle-check", "anchor-circle-exclamation", "anchor-circle-xmark", "anchor-lock", "angel", "angle", "angle-90", "angle-down", "angle-left", "angle-right", "angle-up", "angles-down", "angles-left", "angles-right", "angles-up", "angles-up-down", "ankh", "ant", "apartment", "aperture", "apostrophe", "apple-core", "apple-whole", "archway", "arrow-down", "arrow-down-1-9", "arrow-down-9-1", "arrow-down-a-z", "arrow-down-arrow-up", "arrow-down-big-small", "arrow-down-from-arc", "arrow-down-from-bracket", "arrow-down-from-dotted-line", "arrow-down-from-line", "arrow-down-left", "arrow-down-left-and-arrow-up-right-to-center", "arrow-down-long", "arrow-down-right", "arrow-down-short-wide", "arrow-down-small-big", "arrow-down-square-triangle", "arrow-down-to-arc", "arrow-down-to-bracket", "arrow-down-to-dotted-line", "arrow-down-to-line", "arrow-down-to-square", "arrow-down-triangle-square", "arrow-down-up-across-line", "arrow-down-up-lock", "arrow-down-wide-short", "arrow-down-z-a", "arrow-left", "arrow-left-from-arc", "arrow-left-from-bracket", "arrow-left-from-line", "arrow-left-long", "arrow-left-long-to-line", "arrow-left-to-arc", "arrow-left-to-bracket", "arrow-left-to-line", "arrow-pointer", "arrow-progress", "arrow-right", "arrow-right-arrow-left", "arrow-right-from-arc", "arrow-right-from-bracket", "arrow-right-from-line", "arrow-right-long", "arrow-right-long-to-line", "arrow-right-to-arc", "arrow-right-to-bracket", "arrow-right-to-city", "arrow-right-to-line", "arrow-rotate-left", "arrow-rotate-right", "arrow-trend-down", "arrow-trend-up", "arrow-turn-down", "arrow-turn-down-left", "arrow-turn-down-right", "arrow-turn-left", "arrow-turn-left-down", "arrow-turn-left-up", "arrow-turn-right", "arrow-turn-up", "arrow-up", "arrow-up-1-9", "arrow-up-9-1", "arrow-up-a-z", "arrow-up-arrow-down", "arrow-up-big-small", "arrow-up-from-arc", "arrow-up-from-bracket", "arrow-up-from-dotted-line", "arrow-up-from-ground-water", "arrow-up-from-line", "arrow-up-from-square", "arrow-up-from-water-pump", "arrow-up-left", "arrow-up-left-from-circle", "arrow-up-long", "arrow-up-right", "arrow-up-right-and-arrow-down-left-from-center", "arrow-up-right-dots", "arrow-up-right-from-square", "arrow-up-short-wide", "arrow-up-small-big", "arrow-up-square-triangle", "arrow-up-to-arc", "arrow-up-to-bracket", "arrow-up-to-dotted-line", "arrow-up-to-line", "arrow-up-triangle-square", "arrow-up-wide-short", "arrow-up-z-a", "arrows-cross", "arrows-down-to-line", "arrows-down-to-people", "arrows-from-dotted-line", "arrows-from-line", "arrows-left-right", "arrows-left-right-to-line", "arrows-maximize", "arrows-minimize", "arrows-repeat", "arrows-repeat-1", "arrows-retweet", "arrows-rotate", "arrows-rotate-reverse", "arrows-spin", "arrows-split-up-and-left", "arrows-to-circle", "arrows-to-dot", "arrows-to-dotted-line", "arrows-to-eye", "arrows-to-line", "arrows-turn-right", "arrows-turn-to-dots", "arrows-up-down", "arrows-up-down-left-right", "arrows-up-to-line", "asterisk", "at", "atom", "atom-simple", "audio-description", "audio-description-slash", "austral-sign", "avocado", "award", "award-simple", "axe", "axe-battle", "b", "baby", "baby-carriage", "backpack", "backward", "backward-fast", "backward-step", "bacon", "bacteria", "bacterium", "badge", "badge-check", "badge-dollar", "badge-percent", "badge-sheriff", "badger-honey", "badminton", "bag-seedling", "bag-shopping", "bag-shopping-minus", "bag-shopping-plus", "bagel", "bags-shopping", "baguette", "bahai", "baht-sign", "ball-pile", "balloon", "balloons", "ballot", "ballot-check", "ban", "ban-bug", "ban-parking", "ban-smoking", "banana", "bandage", "bangladeshi-taka-sign", "banjo", "barcode", "barcode-read", "barcode-scan", "bars", "bars-filter", "bars-progress", "bars-sort", "bars-staggered", "baseball", "baseball-bat-ball", "basket-shopping", "basket-shopping-minus", "basket-shopping-plus", "basket-shopping-simple", "basketball", "basketball-hoop", "bat", "bath", "battery-bolt", "battery-empty", "battery-exclamation", "battery-full", "battery-half", "battery-low", "battery-quarter", "battery-slash", "battery-three-quarters", "bed", "bed-bunk", "bed-empty", "bed-front", "bed-pulse", "bee", "beer-mug", "beer-mug-empty", "bell", "bell-concierge", "bell-exclamation", "bell-on", "bell-plus", "bell-ring", "bell-school", "bell-school-slash", "bell-slash", "bells", "bench-tree", "bezier-curve", "bicycle", "billboard", "bin-bottles", "bin-bottles-recycle", "bin-recycle", "binary", "binary-circle-check", "binary-lock", "binary-slash", "binoculars", "biohazard", "bird", "bitcoin-sign", "blanket", "blanket-fire", "blender", "blender-phone", "blinds", "blinds-open", "blinds-raised", "block", "block-brick", "block-brick-fire", "block-question", "block-quote", "blog", "blueberries", "bold", "bolt", "bolt-auto", "bolt-lightning", "bolt-slash", "bomb", "bone", "bone-break", "bong", "book", "book-arrow-right", "book-arrow-up", "book-atlas", "book-bible", "book-blank", "book-bookmark", "book-circle-arrow-right", "book-circle-arrow-up", "book-copy", "book-font", "book-heart", "book-journal-whills", "book-medical", "book-open", "book-open-cover", "book-open-reader", "book-quran", "book-section", "book-skull", "book-sparkles", "book-tanakh", "book-user", "bookmark", "bookmark-slash", "books", "books-medical", "boombox", "boot", "boot-heeled", "booth-curtain", "border-all", "border-bottom", "border-bottom-right", "border-center-h", "border-center-v", "border-inner", "border-left", "border-none", "border-outer", "border-right", "border-top", "border-top-left", "bore-hole", "bottle-baby", "bottle-droplet", "bottle-water", "bow-arrow", "bowl-chopsticks", "bowl-chopsticks-noodles", "bowl-food", "bowl-hot", "bowl-rice", "bowl-scoop", "bowl-scoops", "bowl-soft-serve", "bowl-spoon", "bowling-ball", "bowling-ball-pin", "bowling-pins", "box", "box-archive", "box-ballot", "box-check", "box-circle-check", "box-dollar", "box-heart", "box-open", "box-open-full", "box-taped", "box-tissue", "boxes-packing", "boxes-stacked", "boxing-glove", "bracket-curly", "bracket-curly-right", "bracket-round", "bracket-round-right", "bracket-square", "bracket-square-right", "brackets-curly", "brackets-round", "brackets-square", "braille", "brain", "brain-arrow-curved-right", "brain-circuit", "brake-warning", "brazilian-real-sign", "bread-loaf", "bread-slice", "bread-slice-butter", "bridge", "bridge-circle-check", "bridge-circle-exclamation", "bridge-circle-xmark", "bridge-lock", "bridge-suspension", "bridge-water", "briefcase", "briefcase-arrow-right", "briefcase-blank", "briefcase-medical", "brightness", "brightness-low", "bring-forward", "bring-front", "broccoli", "broom", "broom-ball", "broom-wide", "browser", "browsers", "brush", "bucket", "bug", "bug-slash", "bugs", "building", "building-circle-arrow-right", "building-circle-check", "building-circle-exclamation", "building-circle-xmark", "building-columns", "building-flag", "building-lock", "building-magnifying-glass", "building-memo", "building-ngo", "building-shield", "building-un", "building-user", "building-wheat", "buildings", "bulldozer", "bullhorn", "bullseye", "bullseye-arrow", "bullseye-pointer", "buoy", "buoy-mooring", "burger", "burger-cheese", "burger-fries", "burger-glass", "burger-lettuce", "burger-soda", "burrito", "burst", "bus", "bus-school", "bus-simple", "business-time", "butter", "c", "cabin", "cabinet-filing", "cable-car", "cactus", "caduceus", "cake-candles", "cake-slice", "calculator", "calculator-simple", "calendar", "calendar-arrow-down", "calendar-arrow-up", "calendar-check", "calendar-circle-exclamation", "calendar-circle-minus", "calendar-circle-plus", "calendar-circle-user", "calendar-clock", "calendar-day", "calendar-days", "calendar-exclamation", "calendar-heart", "calendar-image", "calendar-lines", "calendar-lines-pen", "calendar-minus", "calendar-pen", "calendar-plus", "calendar-range", "calendar-star", "calendar-users", "calendar-week", "calendar-xmark", "calendars", "camcorder", "camera", "camera-cctv", "camera-movie", "camera-polaroid", "camera-retro", "camera-rotate", "camera-security", "camera-slash", "camera-viewfinder", "camera-web", "camera-web-slash", "campfire", "campground", "can-food", "candle-holder", "candy", "candy-bar", "candy-cane", "candy-corn", "cannabis", "cannon", "capsules", "car", "car-battery", "car-bolt", "car-building", "car-bump", "car-burst", "car-bus", "car-circle-bolt", "car-garage", "car-mirrors", "car-on", "car-rear", "car-side", "car-side-bolt", "car-tilt", "car-tunnel", "car-wash", "car-wrench", "caravan", "caravan-simple", "card-club", "card-diamond", "card-heart", "card-spade", "cards", "cards-blank", "caret-down", "caret-left", "caret-right", "caret-up", "carrot", "cars", "cart-arrow-down", "cart-arrow-up", "cart-circle-arrow-down", "cart-circle-arrow-up", "cart-circle-check", "cart-circle-exclamation", "cart-circle-plus", "cart-circle-xmark", "cart-flatbed", "cart-flatbed-boxes", "cart-flatbed-empty", "cart-flatbed-suitcase", "cart-minus", "cart-plus", "cart-shopping", "cart-shopping-fast", "cart-xmark", "cash-register", "cassette-betamax", "cassette-tape", "cassette-vhs", "castle", "cat", "cat-space", "cauldron", "cedi-sign", "cent-sign", "certificate", "chair", "chair-office", "chalkboard", "chalkboard-user", "champagne-glass", "champagne-glasses", "charging-station", "chart-area", "chart-bar", "chart-bullet", "chart-candlestick", "chart-column", "chart-gantt", "chart-kanban", "chart-line", "chart-line-down", "chart-line-up", "chart-line-up-down", "chart-mixed", "chart-mixed-up-circle-currency", "chart-mixed-up-circle-dollar", "chart-network", "chart-pie", "chart-pie-simple", "chart-pie-simple-circle-currency", "chart-pie-simple-circle-dollar", "chart-pyramid", "chart-radar", "chart-scatter", "chart-scatter-3d", "chart-scatter-bubble", "chart-simple", "chart-simple-horizontal", "chart-tree-map", "chart-user", "chart-waterfall", "check", "check-double", "check-to-slot", "cheese", "cheese-swiss", "cherries", "chess", "chess-bishop", "chess-bishop-piece", "chess-board", "chess-clock", "chess-clock-flip", "chess-king", "chess-king-piece", "chess-knight", "chess-knight-piece", "chess-pawn", "chess-pawn-piece", "chess-queen", "chess-queen-piece", "chess-rook", "chess-rook-piece", "chestnut", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chf-sign", "child", "child-combatant", "child-dress", "child-reaching", "children", "chimney", "chopsticks", "church", "circle", "circle-0", "circle-1", "circle-2", "circle-3", "circle-4", "circle-5", "circle-6", "circle-7", "circle-8", "circle-9", "circle-a", "circle-ampersand", "circle-arrow-down", "circle-arrow-down-left", "circle-arrow-down-right", "circle-arrow-left", "circle-arrow-right", "circle-arrow-up", "circle-arrow-up-left", "circle-arrow-up-right", "circle-b", "circle-bolt", "circle-book-open", "circle-bookmark", "circle-c", "circle-calendar", "circle-camera", "circle-caret-down", "circle-caret-left", "circle-caret-right", "circle-caret-up", "circle-check", "circle-chevron-down", "circle-chevron-left", "circle-chevron-right", "circle-chevron-up", "circle-d", "circle-dashed", "circle-divide", "circle-dollar", "circle-dollar-to-slot", "circle-dot", "circle-down", "circle-down-left", "circle-down-right", "circle-e", "circle-ellipsis", "circle-ellipsis-vertical", "circle-envelope", "circle-euro", "circle-exclamation", "circle-exclamation-check", "circle-f", "circle-g", "circle-gf", "circle-h", "circle-half", "circle-half-stroke", "circle-heart", "circle-i", "circle-info", "circle-j", "circle-k", "circle-l", "circle-left", "circle-location-arrow", "circle-m", "circle-microphone", "circle-microphone-lines", "circle-minus", "circle-n", "circle-nodes", "circle-notch", "circle-o", "circle-p", "circle-parking", "circle-pause", "circle-phone", "circle-phone-flip", "circle-phone-hangup", "circle-play", "circle-plus", "circle-q", "circle-quarter", "circle-quarter-stroke", "circle-quarters", "circle-question", "circle-r", "circle-radiation", "circle-right", "circle-s", "circle-small", "circle-sort", "circle-sort-down", "circle-sort-up", "circle-star", "circle-sterling", "circle-stop", "circle-t", "circle-three-quarters", "circle-three-quarters-stroke", "circle-trash", "circle-u", "circle-up", "circle-up-left", "circle-up-right", "circle-user", "circle-v", "circle-video", "circle-w", "circle-waveform-lines", "circle-wifi", "circle-wifi-circle-wifi", "circle-x", "circle-xmark", "circle-y", "circle-yen", "circle-z", "circles-overlap", "citrus", "citrus-slice", "city", "clapperboard", "clapperboard-play", "clarinet", "claw-marks", "clipboard", "clipboard-check", "clipboard-list", "clipboard-list-check", "clipboard-medical", "clipboard-prescription", "clipboard-question", "clipboard-user", "clock", "clock-desk", "clock-eight", "clock-eight-thirty", "clock-eleven", "clock-eleven-thirty", "clock-five", "clock-five-thirty", "clock-four-thirty", "clock-nine", "clock-nine-thirty", "clock-one", "clock-one-thirty", "clock-rotate-left", "clock-seven", "clock-seven-thirty", "clock-six", "clock-six-thirty", "clock-ten", "clock-ten-thirty", "clock-three", "clock-three-thirty", "clock-twelve", "clock-twelve-thirty", "clock-two", "clock-two-thirty", "clone", "closed-captioning", "closed-captioning-slash", "clothes-hanger", "cloud", "cloud-arrow-down", "cloud-arrow-up", "cloud-binary", "cloud-bolt", "cloud-bolt-moon", "cloud-bolt-sun", "cloud-check", "cloud-drizzle", "cloud-exclamation", "cloud-fog", "cloud-hail", "cloud-hail-mixed", "cloud-meatball", "cloud-minus", "cloud-moon", "cloud-moon-rain", "cloud-music", "cloud-plus", "cloud-question", "cloud-rain", "cloud-rainbow", "cloud-showers", "cloud-showers-heavy", "cloud-showers-water", "cloud-slash", "cloud-sleet", "cloud-snow", "cloud-sun", "cloud-sun-rain", "cloud-word", "cloud-xmark", "clouds", "clouds-moon", "clouds-sun", "clover", "club", "coconut", "code", "code-branch", "code-commit", "code-compare", "code-fork", "code-merge", "code-pull-request", "code-pull-request-closed", "code-pull-request-draft", "code-simple", "coffee-bean", "coffee-beans", "coffee-pot", "coffin", "coffin-cross", "coin", "coin-blank", "coin-front", "coin-vertical", "coins", "colon", "colon-sign", "columns-3", "comet", "comma", "command", "comment", "comment-arrow-down", "comment-arrow-up", "comment-arrow-up-right", "comment-captions", "comment-check", "comment-code", "comment-dollar", "comment-dots", "comment-exclamation", "comment-heart", "comment-image", "comment-lines", "comment-medical", "comment-middle", "comment-middle-top", "comment-minus", "comment-music", "comment-pen", "comment-plus", "comment-question", "comment-quote", "comment-slash", "comment-smile", "comment-sms", "comment-text", "comment-xmark", "comments", "comments-dollar", "comments-question", "comments-question-check", "compact-disc", "compass", "compass-drafting", "compass-slash", "compress", "compress-wide", "computer", "computer-classic", "computer-mouse", "computer-mouse-scrollwheel", "computer-speaker", "container-storage", "conveyor-belt", "conveyor-belt-arm", "conveyor-belt-boxes", "conveyor-belt-empty", "cookie", "cookie-bite", "copy", "copyright", "corn", "corner", "couch", "court-sport", "cow", "cowbell", "cowbell-circle-plus", "crab", "crate-apple", "crate-empty", "credit-card", "credit-card-blank", "credit-card-front", "cricket-bat-ball", "croissant", "crop", "crop-simple", "cross", "crosshairs", "crosshairs-simple", "crow", "crown", "crutch", "crutches", "cruzeiro-sign", "crystal-ball", "cube", "cubes", "cubes-stacked", "cucumber", "cup-straw", "cup-straw-swoosh", "cup-togo", "cupcake", "curling-stone", "custard", "d", "dagger", "dash", "database", "deer", "deer-rudolph", "delete-left", "delete-right", "democrat", "desktop", "desktop-arrow-down", "dharmachakra", "diagram-cells", "diagram-lean-canvas", "diagram-nested", "diagram-next", "diagram-predecessor", "diagram-previous", "diagram-project", "diagram-sankey", "diagram-subtask", "diagram-successor", "diagram-venn", "dial", "dial-high", "dial-low", "dial-max", "dial-med", "dial-med-low", "dial-min", "dial-off", "diamond", "diamond-exclamation", "diamond-half", "diamond-half-stroke", "diamond-turn-right", "dice", "dice-d10", "dice-d12", "dice-d20", "dice-d4", "dice-d6", "dice-d8", "dice-five", "dice-four", "dice-one", "dice-six", "dice-three", "dice-two", "dinosaur", "diploma", "disc-drive", "disease", "display", "display-arrow-down", "display-chart-up", "display-chart-up-circle-currency", "display-chart-up-circle-dollar", "display-code", "display-medical", "display-slash", "distribute-spacing-horizontal", "distribute-spacing-vertical", "ditto", "divide", "dna", "do-not-enter", "dog", "dog-leashed", "dollar-sign", "dolly", "dolly-empty", "dolphin", "dong-sign", "donut", "door-closed", "door-open", "dove", "down", "down-from-bracket", "down-from-dotted-line", "down-from-line", "down-left", "down-left-and-up-right-to-center", "down-long", "down-right", "down-to-bracket", "down-to-dotted-line", "down-to-line", "download", "dragon", "draw-circle", "draw-polygon", "draw-square", "dreidel", "drone", "drone-front", "droplet", "droplet-degree", "droplet-percent", "droplet-slash", "drum", "drum-steelpan", "drumstick", "drumstick-bite", "dryer", "dryer-heat", "duck", "dumbbell", "dumpster", "dumpster-fire", "dungeon", "e", "ear", "ear-deaf", "ear-listen", "ear-muffs", "earth-africa", "earth-americas", "earth-asia", "earth-europe", "earth-oceania", "eclipse", "egg", "egg-fried", "eggplant", "eject", "elephant", "elevator", "ellipsis", "ellipsis-stroke", "ellipsis-stroke-vertical", "ellipsis-vertical", "empty-set", "engine", "engine-warning", "envelope", "envelope-circle-check", "envelope-dot", "envelope-open", "envelope-open-dollar", "envelope-open-text", "envelopes", "envelopes-bulk", "equals", "eraser", "escalator", "ethernet", "euro-sign", "excavator", "exclamation", "expand", "expand-wide", "explosion", "eye", "eye-dropper", "eye-dropper-full", "eye-dropper-half", "eye-evil", "eye-low-vision", "eye-slash", "eyes", "f", "face-angry", "face-angry-horns", "face-anguished", "face-anxious-sweat", "face-astonished", "face-awesome", "face-beam-hand-over-mouth", "face-clouds", "face-confounded", "face-confused", "face-cowboy-hat", "face-diagonal-mouth", "face-disappointed", "face-disguise", "face-dizzy", "face-dotted", "face-downcast-sweat", "face-drooling", "face-exhaling", "face-explode", "face-expressionless", "face-eyes-xmarks", "face-fearful", "face-flushed", "face-frown", "face-frown-open", "face-frown-slight", "face-glasses", "face-grimace", "face-grin", "face-grin-beam", "face-grin-beam-sweat", "face-grin-hearts", "face-grin-squint", "face-grin-squint-tears", "face-grin-stars", "face-grin-tears", "face-grin-tongue", "face-grin-tongue-squint", "face-grin-tongue-wink", "face-grin-wide", "face-grin-wink", "face-hand-over-mouth", "face-hand-peeking", "face-hand-yawn", "face-head-bandage", "face-holding-back-tears", "face-hushed", "face-icicles", "face-kiss", "face-kiss-beam", "face-kiss-closed-eyes", "face-kiss-wink-heart", "face-laugh", "face-laugh-beam", "face-laugh-squint", "face-laugh-wink", "face-lying", "face-mask", "face-meh", "face-meh-blank", "face-melting", "face-monocle", "face-nauseated", "face-nose-steam", "face-party", "face-pensive", "face-persevering", "face-pleading", "face-pouting", "face-raised-eyebrow", "face-relieved", "face-rolling-eyes", "face-sad-cry", "face-sad-sweat", "face-sad-tear", "face-saluting", "face-scream", "face-shush", "face-sleeping", "face-sleepy", "face-smile", "face-smile-beam", "face-smile-halo", "face-smile-hearts", "face-smile-horns", "face-smile-plus", "face-smile-relaxed", "face-smile-tear", "face-smile-tongue", "face-smile-upside-down", "face-smile-wink", "face-smiling-hands", "face-smirking", "face-spiral-eyes", "face-sunglasses", "face-surprise", "face-swear", "face-thermometer", "face-thinking", "face-tired", "face-tissue", "face-tongue-money", "face-tongue-sweat", "face-unamused", "face-viewfinder", "face-vomit", "face-weary", "face-woozy", "face-worried", "face-zany", "face-zipper", "falafel", "family", "family-dress", "family-pants", "fan", "fan-table", "farm", "faucet", "faucet-drip", "fax", "feather", "feather-pointed", "fence", "ferris-wheel", "ferry", "field-hockey-stick-ball", "file", "file-arrow-down", "file-arrow-up", "file-audio", "file-binary", "file-cad", "file-certificate", "file-chart-column", "file-chart-pie", "file-check", "file-circle-check", "file-circle-exclamation", "file-circle-info", "file-circle-minus", "file-circle-plus", "file-circle-question", "file-circle-xmark", "file-code", "file-contract", "file-csv", "file-dashed-line", "file-doc", "file-eps", "file-excel", "file-exclamation", "file-export", "file-gif", "file-heart", "file-image", "file-import", "file-invoice", "file-invoice-dollar", "file-jpg", "file-lines", "file-lock", "file-magnifying-glass", "file-medical", "file-minus", "file-mov", "file-mp3", "file-mp4", "file-music", "file-pdf", "file-pen", "file-plus", "file-plus-minus", "file-png", "file-powerpoint", "file-ppt", "file-prescription", "file-shield", "file-signature", "file-slash", "file-spreadsheet", "file-svg", "file-user", "file-vector", "file-video", "file-waveform", "file-word", "file-xls", "file-xmark", "file-xml", "file-zip", "file-zipper", "files", "files-medical", "fill", "fill-drip", "film", "film-canister", "film-simple", "film-slash", "films", "filter", "filter-circle-dollar", "filter-circle-xmark", "filter-list", "filter-slash", "filters", "fingerprint", "fire", "fire-burner", "fire-extinguisher", "fire-flame", "fire-flame-curved", "fire-flame-simple", "fire-hydrant", "fire-smoke", "fireplace", "fish", "fish-bones", "fish-cooked", "fish-fins", "fishing-rod", "flag", "flag-checkered", "flag-pennant", "flag-swallowtail", "flag-usa", "flashlight", "flask", "flask-gear", "flask-round-poison", "flask-round-potion", "flask-vial", "flatbread", "flatbread-stuffed", "floppy-disk", "floppy-disk-circle-arrow-right", "floppy-disk-circle-xmark", "floppy-disk-pen", "floppy-disks", "florin-sign", "flower", "flower-daffodil", "flower-tulip", "flute", "flux-capacitor", "flying-disc", "folder", "folder-arrow-down", "folder-arrow-up", "folder-bookmark", "folder-check", "folder-closed", "folder-gear", "folder-grid", "folder-heart", "folder-image", "folder-magnifying-glass", "folder-medical", "folder-minus", "folder-music", "folder-open", "folder-plus", "folder-tree", "folder-user", "folder-xmark", "folders", "fondue-pot", "font", "font-case", "football", "football-helmet", "fork", "fork-knife", "forklift", "fort", "forward", "forward-fast", "forward-step", "frame", "franc-sign", "french-fries", "frog", "function", "futbol", "g", "galaxy", "gallery-thumbnails", "game-board", "game-board-simple", "game-console-handheld", "game-console-handheld-crank", "gamepad", "gamepad-modern", "garage", "garage-car", "garage-open", "garlic", "gas-pump", "gas-pump-slash", "gauge", "gauge-circle-bolt", "gauge-circle-minus", "gauge-circle-plus", "gauge-high", "gauge-low", "gauge-max", "gauge-min", "gauge-simple", "gauge-simple-high", "gauge-simple-low", "gauge-simple-max", "gauge-simple-min", "gavel", "gear", "gear-code", "gear-complex", "gear-complex-code", "gears", "gem", "genderless", "ghost", "gif", "gift", "gift-card", "gifts", "gingerbread-man", "glass", "glass-citrus", "glass-empty", "glass-half", "glass-water", "glass-water-droplet", "glasses", "glasses-round", "globe", "globe-pointer", "globe-snow", "globe-stand", "goal-net", "golf-ball-tee", "golf-club", "golf-flag-hole", "gopuram", "graduation-cap", "gramophone", "grapes", "grate", "grate-droplet", "greater-than", "greater-than-equal", "grid", "grid-2", "grid-2-plus", "grid-4", "grid-5", "grid-dividers", "grid-horizontal", "grid-round", "grid-round-2", "grid-round-2-plus", "grid-round-4", "grid-round-5", "grill", "grill-fire", "grill-hot", "grip", "grip-dots", "grip-dots-vertical", "grip-lines", "grip-lines-vertical", "grip-vertical", "group-arrows-rotate", "guarani-sign", "guitar", "guitar-electric", "guitars", "gun", "gun-slash", "gun-squirt", "h", "h1", "h2", "h3", "h4", "h5", "h6", "hammer", "hammer-brush", "hammer-crash", "hammer-war", "hamsa", "hand", "hand-back-fist", "hand-back-point-down", "hand-back-point-left", "hand-back-point-ribbon", "hand-back-point-right", "hand-back-point-up", "hand-dots", "hand-fingers-crossed", "hand-fist", "hand-heart", "hand-holding", "hand-holding-box", "hand-holding-circle-dollar", "hand-holding-dollar", "hand-holding-droplet", "hand-holding-hand", "hand-holding-heart", "hand-holding-magic", "hand-holding-medical", "hand-holding-seedling", "hand-holding-skull", "hand-horns", "hand-lizard", "hand-love", "hand-middle-finger", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-ribbon", "hand-point-right", "hand-point-up", "hand-pointer", "hand-scissors", "hand-sparkles", "hand-spock", "hand-wave", "handcuffs", "hands", "hands-asl-interpreting", "hands-bound", "hands-bubbles", "hands-clapping", "hands-holding", "hands-holding-child", "hands-holding-circle", "hands-holding-diamond", "hands-holding-dollar", "hands-holding-heart", "hands-praying", "handshake", "handshake-angle", "handshake-simple", "handshake-simple-slash", "handshake-slash", "hanukiah", "hard-drive", "hashtag", "hashtag-lock", "hat-beach", "hat-chef", "hat-cowboy", "hat-cowboy-side", "hat-santa", "hat-winter", "hat-witch", "hat-wizard", "head-side", "head-side-brain", "head-side-cough", "head-side-cough-slash", "head-side-gear", "head-side-goggles", "head-side-headphones", "head-side-heart", "head-side-mask", "head-side-medical", "head-side-virus", "heading", "headphones", "headphones-simple", "headset", "heart", "heart-circle-bolt", "heart-circle-check", "heart-circle-exclamation", "heart-circle-minus", "heart-circle-plus", "heart-circle-xmark", "heart-crack", "heart-half", "heart-half-stroke", "heart-pulse", "heat", "helicopter", "helicopter-symbol", "helmet-battle", "helmet-safety", "helmet-un", "hexagon", "hexagon-check", "hexagon-divide", "hexagon-exclamation", "hexagon-image", "hexagon-minus", "hexagon-plus", "hexagon-vertical-nft", "hexagon-vertical-nft-slanted", "hexagon-xmark", "high-definition", "highlighter", "highlighter-line", "hill-avalanche", "hill-rockslide", "hippo", "hockey-mask", "hockey-puck", "hockey-stick-puck", "hockey-sticks", "holly-berry", "honey-pot", "hood-cloak", "horizontal-rule", "horse", "horse-head", "horse-saddle", "hose", "hose-reel", "hospital", "hospital-user", "hospitals", "hot-tub-person", "hotdog", "hotel", "hourglass", "hourglass-clock", "hourglass-end", "hourglass-half", "hourglass-start", "house", "house-blank", "house-building", "house-chimney", "house-chimney-blank", "house-chimney-crack", "house-chimney-heart", "house-chimney-medical", "house-chimney-user", "house-chimney-window", "house-circle-check", "house-circle-exclamation", "house-circle-xmark", "house-crack", "house-day", "house-fire", "house-flag", "house-flood-water", "house-flood-water-circle-arrow-right", "house-heart", "house-laptop", "house-lock", "house-medical", "house-medical-circle-check", "house-medical-circle-exclamation", "house-medical-circle-xmark", "house-medical-flag", "house-night", "house-person-leave", "house-person-return", "house-signal", "house-tree", "house-tsunami", "house-turret", "house-user", "house-water", "house-window", "hryvnia-sign", "hundred-points", "hurricane", "hyphen", "i", "i-cursor", "ice-cream", "ice-skate", "icicles", "icons", "id-badge", "id-card", "id-card-clip", "igloo", "image", "image-landscape", "image-polaroid", "image-polaroid-user", "image-portrait", "image-slash", "image-user", "images", "images-user", "inbox", "inbox-full", "inbox-in", "inbox-out", "inboxes", "indent", "indian-rupee-sign", "industry", "industry-windows", "infinity", "info", "inhaler", "input-numeric", "input-pipe", "input-text", "integral", "interrobang", "intersection", "island-tropical", "italic", "j", "jack-o-lantern", "jar", "jar-wheat", "jedi", "jet-fighter", "jet-fighter-up", "joint", "joystick", "jug", "jug-bottle", "jug-detergent", "k", "kaaba", "kazoo", "kerning", "key", "key-skeleton", "key-skeleton-left-right", "keyboard", "keyboard-brightness", "keyboard-brightness-low", "keyboard-down", "keyboard-left", "keynote", "khanda", "kidneys", "kip-sign", "kit-medical", "kitchen-set", "kite", "kiwi-bird", "kiwi-fruit", "knife", "knife-kitchen", "l", "lacrosse-stick", "lacrosse-stick-ball", "lambda", "lamp", "lamp-desk", "lamp-floor", "lamp-street", "land-mine-on", "landmark", "landmark-dome", "landmark-flag", "landmark-magnifying-glass", "language", "laptop", "laptop-arrow-down", "laptop-binary", "laptop-code", "laptop-file", "laptop-medical", "laptop-mobile", "laptop-slash", "lari-sign", "lasso", "lasso-sparkles", "layer-group", "layer-minus", "layer-plus", "leaf", "leaf-heart", "leaf-maple", "leaf-oak", "leafy-green", "left", "left-from-bracket", "left-from-line", "left-long", "left-long-to-line", "left-right", "left-to-bracket", "left-to-line", "lemon", "less-than", "less-than-equal", "life-ring", "light-ceiling", "light-emergency", "light-emergency-on", "light-switch", "light-switch-off", "light-switch-on", "lightbulb", "lightbulb-cfl", "lightbulb-cfl-on", "lightbulb-dollar", "lightbulb-exclamation", "lightbulb-exclamation-on", "lightbulb-gear", "lightbulb-on", "lightbulb-slash", "lighthouse", "lights-holiday", "line-columns", "line-height", "lines-leaning", "link", "link-horizontal", "link-horizontal-slash", "link-simple", "link-simple-slash", "link-slash", "lips", "lira-sign", "list", "list-check", "list-dropdown", "list-music", "list-ol", "list-radio", "list-timeline", "list-tree", "list-ul", "litecoin-sign", "loader", "lobster", "location-arrow", "location-arrow-up", "location-check", "location-crosshairs", "location-crosshairs-slash", "location-dot", "location-dot-slash", "location-exclamation", "location-minus", "location-pen", "location-pin", "location-pin-lock", "location-pin-slash", "location-plus", "location-question", "location-smile", "location-xmark", "lock", "lock-a", "lock-hashtag", "lock-keyhole", "lock-keyhole-open", "lock-open", "locust", "lollipop", "loveseat", "luchador-mask", "lungs", "lungs-virus", "m", "mace", "magnet", "magnifying-glass", "magnifying-glass-arrow-right", "magnifying-glass-arrows-rotate", "magnifying-glass-chart", "magnifying-glass-dollar", "magnifying-glass-location", "magnifying-glass-minus", "magnifying-glass-music", "magnifying-glass-play", "magnifying-glass-plus", "magnifying-glass-waveform", "mailbox", "mailbox-flag-up", "manat-sign", "mandolin", "mango", "manhole", "map", "map-location", "map-location-dot", "map-pin", "marker", "mars", "mars-and-venus", "mars-and-venus-burst", "mars-double", "mars-stroke", "mars-stroke-right", "mars-stroke-up", "martini-glass", "martini-glass-citrus", "martini-glass-empty", "mask", "mask-face", "mask-snorkel", "mask-ventilator", "masks-theater", "mattress-pillow", "maximize", "meat", "medal", "megaphone", "melon", "melon-slice", "memo", "memo-circle-check", "memo-circle-info", "memo-pad", "memory", "menorah", "mercury", "merge", "message", "message-arrow-down", "message-arrow-up", "message-arrow-up-right", "message-bot", "message-captions", "message-check", "message-code", "message-dollar", "message-dots", "message-exclamation", "message-heart", "message-image", "message-lines", "message-medical", "message-middle", "message-middle-top", "message-minus", "message-music", "message-pen", "message-plus", "message-question", "message-quote", "message-slash", "message-smile", "message-sms", "message-text", "message-xmark", "messages", "messages-dollar", "messages-question", "meteor", "meter", "meter-bolt", "meter-droplet", "meter-fire", "microchip", "microchip-ai", "microphone", "microphone-lines", "microphone-lines-slash", "microphone-slash", "microphone-stand", "microscope", "microwave", "mill-sign", "minimize", "minus", "mistletoe", "mitten", "mobile", "mobile-button", "mobile-notch", "mobile-retro", "mobile-screen", "mobile-screen-button", "mobile-signal", "mobile-signal-out", "money-bill", "money-bill-1", "money-bill-1-wave", "money-bill-simple", "money-bill-simple-wave", "money-bill-transfer", "money-bill-trend-up", "money-bill-wave", "money-bill-wheat", "money-bills", "money-bills-simple", "money-check", "money-check-dollar", "money-check-dollar-pen", "money-check-pen", "money-from-bracket", "money-simple-from-bracket", "monitor-waveform", "monkey", "monument", "moon", "moon-cloud", "moon-over-sun", "moon-stars", "moped", "mortar-pestle", "mosque", "mosquito", "mosquito-net", "motorcycle", "mound", "mountain", "mountain-city", "mountain-sun", "mountains", "mouse-field", "mp3-player", "mug", "mug-hot", "mug-marshmallows", "mug-saucer", "mug-tea", "mug-tea-saucer", "mushroom", "music", "music-magnifying-glass", "music-note", "music-note-slash", "music-slash", "mustache", "n", "naira-sign", "narwhal", "nesting-dolls", "network-wired", "neuter", "newspaper", "nfc", "nfc-lock", "nfc-magnifying-glass", "nfc-pen", "nfc-signal", "nfc-slash", "nfc-trash", "nose", "not-equal", "notdef", "note", "note-medical", "note-sticky", "notebook", "notes", "notes-medical", "o", "object-exclude", "object-group", "object-intersect", "object-subtract", "object-ungroup", "object-union", "objects-align-bottom", "objects-align-center-horizontal", "objects-align-center-vertical", "objects-align-left", "objects-align-right", "objects-align-top", "objects-column", "octagon", "octagon-check", "octagon-divide", "octagon-exclamation", "octagon-minus", "octagon-plus", "octagon-xmark", "oil-can", "oil-can-drip", "oil-temperature", "oil-well", "olive", "olive-branch", "om", "omega", "onion", "option", "ornament", "otter", "outdent", "outlet", "oven", "overline", "p", "page", "page-caret-down", "page-caret-up", "pager", "paint-roller", "paintbrush", "paintbrush-fine", "paintbrush-pencil", "palette", "pallet", "pallet-box", "pallet-boxes", "pan-food", "pan-frying", "pancakes", "panel-ews", "panel-fire", "panorama", "paper-plane", "paper-plane-top", "paperclip", "paperclip-vertical", "parachute-box", "paragraph", "paragraph-left", "party-bell", "party-horn", "passport", "paste", "pause", "paw", "paw-claws", "paw-simple", "peace", "peach", "peanut", "peanuts", "peapod", "pear", "pedestal", "pegasus", "pen", "pen-circle", "pen-clip", "pen-clip-slash", "pen-fancy", "pen-fancy-slash", "pen-field", "pen-line", "pen-nib", "pen-nib-slash", "pen-paintbrush", "pen-ruler", "pen-slash", "pen-swirl", "pen-to-square", "pencil", "pencil-mechanical", "pencil-slash", "people", "people-arrows", "people-carry-box", "people-dress", "people-dress-simple", "people-group", "people-line", "people-pants", "people-pants-simple", "people-pulling", "people-robbery", "people-roof", "people-simple", "pepper", "pepper-hot", "percent", "period", "person", "person-arrow-down-to-line", "person-arrow-up-from-line", "person-biking", "person-biking-mountain", "person-booth", "person-breastfeeding", "person-burst", "person-cane", "person-carry-box", "person-chalkboard", "person-circle-check", "person-circle-exclamation", "person-circle-minus", "person-circle-plus", "person-circle-question", "person-circle-xmark", "person-digging", "person-dolly", "person-dolly-empty", "person-dots-from-line", "person-dress", "person-dress-burst", "person-dress-fairy", "person-dress-simple", "person-drowning", "person-fairy", "person-falling", "person-falling-burst", "person-from-portal", "person-half-dress", "person-harassing", "person-hiking", "person-military-pointing", "person-military-rifle", "person-military-to-person", "person-pinball", "person-praying", "person-pregnant", "person-rays", "person-rifle", "person-running", "person-running-fast", "person-seat", "person-seat-reclined", "person-shelter", "person-sign", "person-simple", "person-skating", "person-ski-jumping", "person-ski-lift", "person-skiing", "person-skiing-nordic", "person-sledding", "person-snowboarding", "person-snowmobiling", "person-swimming", "person-through-window", "person-to-door", "person-to-portal", "person-walking", "person-walking-arrow-loop-left", "person-walking-arrow-right", "person-walking-dashed-line-arrow-right", "person-walking-luggage", "person-walking-with-cane", "peseta-sign", "peso-sign", "phone", "phone-arrow-down-left", "phone-arrow-right", "phone-arrow-up-right", "phone-flip", "phone-hangup", "phone-intercom", "phone-missed", "phone-office", "phone-plus", "phone-rotary", "phone-slash", "phone-volume", "phone-xmark", "photo-film", "photo-film-music", "pi", "piano", "piano-keyboard", "pickaxe", "pickleball", "pie", "pig", "piggy-bank", "pills", "pinata", "pinball", "pineapple", "pipe", "pipe-circle-check", "pipe-collar", "pipe-section", "pipe-smoking", "pipe-valve", "pizza", "pizza-slice", "place-of-worship", "plane", "plane-arrival", "plane-circle-check", "plane-circle-exclamation", "plane-circle-xmark", "plane-departure", "plane-engines", "plane-lock", "plane-prop", "plane-slash", "plane-tail", "plane-up", "plane-up-slash", "planet-moon", "planet-ringed", "plant-wilt", "plate-utensils", "plate-wheat", "play", "play-pause", "plug", "plug-circle-bolt", "plug-circle-check", "plug-circle-exclamation", "plug-circle-minus", "plug-circle-plus", "plug-circle-xmark", "plus", "plus-large", "plus-minus", "podcast", "podium", "podium-star", "police-box", "poll-people", "pompebled", "poo", "poo-storm", "pool-8-ball", "poop", "popcorn", "popsicle", "pot-food", "potato", "power-off", "prescription", "prescription-bottle", "prescription-bottle-medical", "prescription-bottle-pill", "presentation-screen", "pretzel", "print", "print-magnifying-glass", "print-slash", "projector", "pump", "pump-medical", "pump-soap", "pumpkin", "puzzle", "puzzle-piece", "puzzle-piece-simple", "q", "qrcode", "question", "quote-left", "quote-right", "quotes", "r", "rabbit", "rabbit-running", "raccoon", "racquet", "radar", "radiation", "radio", "radio-tuner", "rainbow", "raindrops", "ram", "ramp-loading", "ranking-star", "raygun", "receipt", "record-vinyl", "rectangle", "rectangle-ad", "rectangle-barcode", "rectangle-code", "rectangle-history", "rectangle-history-circle-plus", "rectangle-history-circle-user", "rectangle-list", "rectangle-pro", "rectangle-terminal", "rectangle-vertical", "rectangle-vertical-history", "rectangle-wide", "rectangle-xmark", "rectangles-mixed", "recycle", "reel", "reflect-both", "reflect-horizontal", "reflect-vertical", "refrigerator", "registered", "repeat", "repeat-1", "reply", "reply-all", "reply-clock", "republican", "restroom", "restroom-simple", "retweet", "rhombus", "ribbon", "right", "right-from-bracket", "right-from-line", "right-left", "right-left-large", "right-long", "right-long-to-line", "right-to-bracket", "right-to-line", "ring", "ring-diamond", "rings-wedding", "road", "road-barrier", "road-bridge", "road-circle-check", "road-circle-exclamation", "road-circle-xmark", "road-lock", "road-spikes", "robot", "robot-astromech", "rocket", "rocket-launch", "roller-coaster", "rotate", "rotate-exclamation", "rotate-left", "rotate-reverse", "rotate-right", "route", "route-highway", "route-interstate", "router", "rss", "ruble-sign", "rug", "rugby-ball", "ruler", "ruler-combined", "ruler-horizontal", "ruler-triangle", "ruler-vertical", "rupee-sign", "rupiah-sign", "rv", "s", "sack", "sack-dollar", "sack-xmark", "sailboat", "salad", "salt-shaker", "sandwich", "satellite", "satellite-dish", "sausage", "saxophone", "saxophone-fire", "scale-balanced", "scale-unbalanced", "scale-unbalanced-flip", "scalpel", "scalpel-line-dashed", "scanner-gun", "scanner-image", "scanner-keyboard", "scanner-touchscreen", "scarecrow", "scarf", "school", "school-circle-check", "school-circle-exclamation", "school-circle-xmark", "school-flag", "school-lock", "scissors", "screen-users", "screencast", "screwdriver", "screwdriver-wrench", "scribble", "scroll", "scroll-old", "scroll-torah", "scrubber", "scythe", "sd-card", "sd-cards", "seal", "seal-exclamation", "seal-question", "seat-airline", "section", "seedling", "semicolon", "send-back", "send-backward", "sensor", "sensor-cloud", "sensor-fire", "sensor-on", "sensor-triangle-exclamation", "server", "shapes", "share", "share-all", "share-from-square", "share-nodes", "sheep", "sheet-plastic", "shekel-sign", "shelves", "shelves-empty", "shield", "shield-cat", "shield-check", "shield-cross", "shield-dog", "shield-exclamation", "shield-halved", "shield-heart", "shield-keyhole", "shield-minus", "shield-plus", "shield-quartered", "shield-slash", "shield-virus", "shield-xmark", "ship", "shirt", "shirt-long-sleeve", "shirt-running", "shirt-tank-top", "shish-kebab", "shoe-prints", "shop", "shop-lock", "shop-slash", "shovel", "shovel-snow", "shower", "shower-down", "shredder", "shrimp", "shuffle", "shutters", "shuttle-space", "shuttlecock", "sickle", "sidebar", "sidebar-flip", "sigma", "sign-hanging", "sign-post", "sign-posts", "sign-posts-wrench", "signal", "signal-bars", "signal-bars-fair", "signal-bars-good", "signal-bars-slash", "signal-bars-weak", "signal-fair", "signal-good", "signal-slash", "signal-stream", "signal-stream-slash", "signal-strong", "signal-weak", "signature", "signature-lock", "signature-slash", "signs-post", "sim-card", "sim-cards", "sink", "siren", "siren-on", "sitemap", "skeleton", "skeleton-ribs", "ski-boot", "ski-boot-ski", "skull", "skull-cow", "skull-crossbones", "slash", "slash-back", "slash-forward", "sleigh", "slider", "sliders", "sliders-simple", "sliders-up", "slot-machine", "smog", "smoke", "smoking", "snake", "snooze", "snow-blowing", "snowflake", "snowflake-droplets", "snowflakes", "snowman", "snowman-head", "snowplow", "soap", "socks", "soft-serve", "solar-panel", "solar-system", "sort", "sort-down", "sort-up", "spa", "space-station-moon", "space-station-moon-construction", "spade", "spaghetti-monster-flying", "sparkle", "sparkles", "speaker", "speakers", "spell-check", "spider", "spider-black-widow", "spider-web", "spinner", "spinner-scale", "spinner-third", "split", "splotch", "spoon", "sportsball", "spray-can", "spray-can-sparkles", "sprinkler", "sprinkler-ceiling", "square", "square-0", "square-1", "square-2", "square-3", "square-4", "square-5", "square-6", "square-7", "square-8", "square-9", "square-a", "square-a-lock", "square-ampersand", "square-arrow-down", "square-arrow-down-left", "square-arrow-down-right", "square-arrow-left", "square-arrow-right", "square-arrow-up", "square-arrow-up-left", "square-arrow-up-right", "square-b", "square-bolt", "square-c", "square-caret-down", "square-caret-left", "square-caret-right", "square-caret-up", "square-check", "square-chevron-down", "square-chevron-left", "square-chevron-right", "square-chevron-up", "square-code", "square-d", "square-dashed", "square-dashed-circle-plus", "square-divide", "square-dollar", "square-down", "square-down-left", "square-down-right", "square-e", "square-ellipsis", "square-ellipsis-vertical", "square-envelope", "square-exclamation", "square-f", "square-fragile", "square-full", "square-g", "square-h", "square-heart", "square-i", "square-info", "square-j", "square-k", "square-kanban", "square-l", "square-left", "square-list", "square-m", "square-minus", "square-n", "square-nfi", "square-o", "square-p", "square-parking", "square-parking-slash", "square-pen", "square-person-confined", "square-phone", "square-phone-flip", "square-phone-hangup", "square-plus", "square-poll-horizontal", "square-poll-vertical", "square-q", "square-quarters", "square-question", "square-quote", "square-r", "square-right", "square-ring", "square-root", "square-root-variable", "square-rss", "square-s", "square-share-nodes", "square-sliders", "square-sliders-vertical", "square-small", "square-star", "square-t", "square-terminal", "square-this-way-up", "square-u", "square-up", "square-up-left", "square-up-right", "square-user", "square-v", "square-virus", "square-w", "square-x", "square-xmark", "square-y", "square-z", "squid", "squirrel", "staff", "staff-snake", "stairs", "stamp", "standard-definition", "stapler", "star", "star-and-crescent", "star-christmas", "star-exclamation", "star-half", "star-half-stroke", "star-of-david", "star-of-life", "star-sharp", "star-sharp-half", "star-sharp-half-stroke", "star-shooting", "starfighter", "starfighter-twin-ion-engine", "starfighter-twin-ion-engine-advanced", "stars", "starship", "starship-freighter", "steak", "steering-wheel", "sterling-sign", "stethoscope", "stocking", "stomach", "stop", "stopwatch", "stopwatch-20", "store", "store-lock", "store-slash", "strawberry", "street-view", "stretcher", "strikethrough", "stroopwafel", "subscript", "subtitles", "subtitles-slash", "suitcase", "suitcase-medical", "suitcase-rolling", "sun", "sun-bright", "sun-cloud", "sun-dust", "sun-haze", "sun-plant-wilt", "sunglasses", "sunrise", "sunset", "superscript", "sushi", "sushi-roll", "swap", "swap-arrows", "swatchbook", "sword", "sword-laser", "sword-laser-alt", "swords", "swords-laser", "symbols", "synagogue", "syringe", "t", "t-rex", "table", "table-cells", "table-cells-column-lock", "table-cells-large", "table-cells-lock", "table-cells-row-lock", "table-columns", "table-layout", "table-list", "table-picnic", "table-pivot", "table-rows", "table-tennis-paddle-ball", "table-tree", "tablet", "tablet-button", "tablet-rugged", "tablet-screen", "tablet-screen-button", "tablets", "tachograph-digital", "taco", "tag", "tags", "tally", "tally-1", "tally-2", "tally-3", "tally-4", "tamale", "tank-water", "tape", "tarp", "tarp-droplet", "taxi", "taxi-bus", "teddy-bear", "teeth", "teeth-open", "telescope", "temperature-arrow-down", "temperature-arrow-up", "temperature-empty", "temperature-full", "temperature-half", "temperature-high", "temperature-list", "temperature-low", "temperature-quarter", "temperature-snow", "temperature-sun", "temperature-three-quarters", "tenge-sign", "tennis-ball", "tent", "tent-arrow-down-to-line", "tent-arrow-left-right", "tent-arrow-turn-left", "tent-arrows-down", "tent-double-peak", "tents", "terminal", "text", "text-height", "text-size", "text-slash", "text-width", "thermometer", "theta", "thought-bubble", "thumbs-down", "thumbs-up", "thumbtack", "tick", "ticket", "ticket-airline", "ticket-perforated", "ticket-simple", "tickets", "tickets-airline", "tickets-perforated", "tickets-simple", "tilde", "timeline", "timeline-arrow", "timer", "tire", "tire-flat", "tire-pressure-warning", "tire-rugged", "toggle-large-off", "toggle-large-on", "toggle-off", "toggle-on", "toilet", "toilet-paper", "toilet-paper-blank", "toilet-paper-blank-under", "toilet-paper-check", "toilet-paper-slash", "toilet-paper-under", "toilet-paper-under-slash", "toilet-paper-xmark", "toilet-portable", "toilets-portable", "tomato", "tombstone", "tombstone-blank", "toolbox", "tooth", "toothbrush", "torii-gate", "tornado", "tower-broadcast", "tower-cell", "tower-control", "tower-observation", "tractor", "trademark", "traffic-cone", "traffic-light", "traffic-light-go", "traffic-light-slow", "traffic-light-stop", "trailer", "train", "train-subway", "train-subway-tunnel", "train-track", "train-tram", "train-tunnel", "transformer-bolt", "transgender", "transporter", "transporter-1", "transporter-2", "transporter-3", "transporter-4", "transporter-5", "transporter-6", "transporter-7", "transporter-empty", "trash", "trash-arrow-up", "trash-can", "trash-can-arrow-up", "trash-can-check", "trash-can-clock", "trash-can-list", "trash-can-plus", "trash-can-slash", "trash-can-undo", "trash-can-xmark", "trash-check", "trash-clock", "trash-list", "trash-plus", "trash-slash", "trash-undo", "trash-xmark", "treasure-chest", "tree", "tree-christmas", "tree-city", "tree-deciduous", "tree-decorated", "tree-large", "tree-palm", "trees", "triangle", "triangle-exclamation", "triangle-instrument", "triangle-person-digging", "tricycle", "tricycle-adult", "trillium", "trophy", "trophy-star", "trowel", "trowel-bricks", "truck", "truck-arrow-right", "truck-bolt", "truck-clock", "truck-container", "truck-container-empty", "truck-droplet", "truck-fast", "truck-field", "truck-field-un", "truck-fire", "truck-flatbed", "truck-front", "truck-ladder", "truck-medical", "truck-monster", "truck-moving", "truck-pickup", "truck-plane", "truck-plow", "truck-ramp", "truck-ramp-box", "truck-ramp-couch", "truck-tow", "truck-utensils", "trumpet", "tty", "tty-answer", "tugrik-sign", "turkey", "turkish-lira-sign", "turn-down", "turn-down-left", "turn-down-right", "turn-left", "turn-left-down", "turn-left-up", "turn-right", "turn-up", "turntable", "turtle", "tv", "tv-music", "tv-retro", "typewriter", "u", "ufo", "ufo-beam", "umbrella", "umbrella-beach", "umbrella-simple", "underline", "unicorn", "uniform-martial-arts", "union", "universal-access", "unlock", "unlock-keyhole", "up", "up-down", "up-down-left-right", "up-from-bracket", "up-from-dotted-line", "up-from-line", "up-left", "up-long", "up-right", "up-right-and-down-left-from-center", "up-right-from-square", "up-to-bracket", "up-to-dotted-line", "up-to-line", "upload", "usb-drive", "user", "user-alien", "user-astronaut", "user-bounty-hunter", "user-check", "user-chef", "user-clock", "user-cowboy", "user-crown", "user-doctor", "user-doctor-hair", "user-doctor-hair-long", "user-doctor-message", "user-gear", "user-graduate", "user-group", "user-group-crown", "user-group-simple", "user-hair", "user-hair-buns", "user-hair-long", "user-hair-mullet", "user-headset", "user-helmet-safety", "user-injured", "user-large", "user-large-slash", "user-lock", "user-magnifying-glass", "user-minus", "user-music", "user-ninja", "user-nurse", "user-nurse-hair", "user-nurse-hair-long", "user-pen", "user-pilot", "user-pilot-tie", "user-plus", "user-police", "user-police-tie", "user-robot", "user-robot-xmarks", "user-secret", "user-shakespeare", "user-shield", "user-slash", "user-tag", "user-tie", "user-tie-hair", "user-tie-hair-long", "user-unlock", "user-visor", "user-vneck", "user-vneck-hair", "user-vneck-hair-long", "user-xmark", "users", "users-between-lines", "users-gear", "users-line", "users-medical", "users-rays", "users-rectangle", "users-slash", "users-viewfinder", "utensils", "utensils-slash", "utility-pole", "utility-pole-double", "v", "vacuum", "vacuum-robot", "value-absolute", "van-shuttle", "vault", "vector-circle", "vector-polygon", "vector-square", "vent-damper", "venus", "venus-double", "venus-mars", "vest", "vest-patches", "vial", "vial-circle-check", "vial-virus", "vials", "video", "video-arrow-down-left", "video-arrow-up-right", "video-plus", "video-slash", "vihara", "violin", "virus", "virus-covid", "virus-covid-slash", "virus-slash", "viruses", "voicemail", "volcano", "volleyball", "volume", "volume-high", "volume-low", "volume-off", "volume-slash", "volume-xmark", "vr-cardboard", "w", "waffle", "wagon-covered", "walker", "walkie-talkie", "wallet", "wand", "wand-magic", "wand-magic-sparkles", "wand-sparkles", "warehouse", "warehouse-full", "washing-machine", "watch", "watch-apple", "watch-calculator", "watch-fitness", "watch-smart", "water", "water-arrow-down", "water-arrow-up", "water-ladder", "watermelon-slice", "wave", "wave-pulse", "wave-sine", "wave-square", "wave-triangle", "waveform", "waveform-lines", "waves-sine", "webhook", "weight-hanging", "weight-scale", "whale", "wheat", "wheat-awn", "wheat-awn-circle-exclamation", "wheat-awn-slash", "wheat-slash", "wheelchair", "wheelchair-move", "whiskey-glass", "whiskey-glass-ice", "whistle", "wifi", "wifi-exclamation", "wifi-fair", "wifi-slash", "wifi-weak", "wind", "wind-turbine", "wind-warning", "window", "window-flip", "window-frame", "window-frame-open", "window-maximize", "window-minimize", "window-restore", "windsock", "wine-bottle", "wine-glass", "wine-glass-crack", "wine-glass-empty", "won-sign", "worm", "wreath", "wreath-laurel", "wrench", "wrench-simple", "x", "x-ray", "xmark", "xmark-large", "xmark-to-slot", "xmarks-lines", "y", "yen-sign", "yin-yang", "z"];
declare const fa_brand_icons: readonly ["42-group", "500px", "accessible-icon", "accusoft", "adn", "adversal", "affiliatetheme", "airbnb", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "battle-net", "behance", "bilibili", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluesky", "bluetooth", "bluetooth-b", "bootstrap", "bots", "brave", "brave-reverse", "btc", "buffer", "buromobelexperte", "buy-n-large", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "centos", "chrome", "chromecast", "cloudflare", "cloudscale", "cloudsmith", "cloudversify", "cmplid", "codepen", "codiepie", "confluence", "connectdevelop", "contao", "cotton-bureau", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dailymotion", "dashcube", "debian", "deezer", "delicious", "deploydog", "deskpro", "dev", "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "edge-legacy", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "evernote", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "fantasy-flight-games", "fedex", "fedora", "figma", "firefox", "firefox-browser", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-alt", "github", "github-alt", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "golang", "goodreads", "goodreads-g", "google", "google-drive", "google-pay", "google-play", "google-plus", "google-plus-g", "google-scholar", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "guilded", "gulp", "hacker-news", "hackerrank", "hashnode", "hips", "hire-a-helper", "hive", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "ideal", "imdb", "instagram", "instalod", "intercom", "internet-explorer", "invision", "ioxhost", "itch-io", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "jira", "joget", "joomla", "js", "jsfiddle", "jxl", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "leanpub", "less", "letterboxd", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "mdb", "medapps", "medium", "medrt", "meetup", "megaport", "mendeley", "meta", "microblog", "microsoft", "mintbit", "mix", "mixcloud", "mixer", "mizuni", "modx", "monero", "napster", "neos", "nfc-directional", "nfc-symbol", "nimblr", "node", "node-js", "npm", "ns8", "nutritionix", "octopus-deploy", "odnoklassniki", "odysee", "old-republic", "opencart", "openid", "opensuse", "opera", "optin-monster", "orcid", "osi", "padlet", "page4", "pagelines", "palfed", "patreon", "paypal", "perbyte", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pinterest", "pinterest-p", "pix", "pixiv", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "raspberry-pi", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "redhat", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "rust", "safari", "salesforce", "sass", "schlix", "screenpal", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shoelace", "shopify", "shopware", "signal-messenger", "simplybuilt", "sistrix", "sith", "sitrox", "sketch", "skyatlas", "skype", "slack", "slideshare", "snapchat", "soundcloud", "sourcetree", "space-awesome", "speakap", "speaker-deck", "spotify", "square-behance", "square-dribbble", "square-facebook", "square-font-awesome", "square-font-awesome-stroke", "square-git", "square-github", "square-gitlab", "square-google-plus", "square-hacker-news", "square-instagram", "square-js", "square-lastfm", "square-letterboxd", "square-odnoklassniki", "square-pied-piper", "square-pinterest", "square-reddit", "square-snapchat", "square-steam", "square-threads", "square-tumblr", "square-twitter", "square-upwork", "square-viadeo", "square-vimeo", "square-web-awesome", "square-web-awesome-stroke", "square-whatsapp", "square-x-twitter", "square-xing", "square-youtube", "squarespace", "stack-exchange", "stack-overflow", "stackpath", "staylinked", "steam", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "stubber", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "suse", "swift", "symfony", "teamspeak", "telegram", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "threads", "tiktok", "trade-federation", "trello", "tumblr", "twitch", "twitter", "typo3", "uber", "ubuntu", "uikit", "umbraco", "uncharted", "uniregistry", "unity", "unsplash", "untappd", "ups", "upwork", "usb", "usps", "ussunnah", "vaadin", "viacoin", "viadeo", "viber", "vimeo", "vimeo-v", "vine", "vk", "vnv", "vuejs", "watchman-monitoring", "waze", "web-awesome", "webflow", "weebly", "weibo", "weixin", "whatsapp", "whmcs", "wikipedia-w", "windows", "wirsindhandwerk", "wix", "wizards-of-the-coast", "wodu", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "x-twitter", "xbox", "xing", "y-combinator", "yahoo", "yammer", "yandex", "yandex-international", "yarn", "yelp", "yoast", "youtube", "zhihu"];

declare const codeLanguages: string[];

type codeLanguage = typeof codeLanguages[number];
type standard_icon = typeof fa_standard_icons[number];
type brand_icon = typeof fa_brand_icons[number];
type icon = standard_icon | brand_icon;
type heading_level = 1 | 2 | 3 | 4 | 5 | 6;
type context = 'info' | 'positive' | 'negative';
type align = 'left' | 'right' | 'center';
type justify = 'start' | 'end' | 'center';
type width = 'standard' | 'wide' | 'full';
type aspect_ratio = '1/1' | '2/3' | '3/2' | '16/9';

interface HeadingProps {
    /** Heading Level */
    level: heading_level;
    /** Heading Text */
    children: React.ReactNode;
    /** Heading Class Name */
    className?: string;
    /** Heading Alignment */
    align?: align;
}
/** Heading Component is just a utility within the Minerva project and not as a part of the component library */
declare const Heading: (props: HeadingProps) => JSX.Element;

interface IconProps {
    /** The name of Icon */
    name: icon;
    /** The alt text of Icon */
    alt?: string;
    type?: 'solid' | 'brand' | 'duotone';
}
/** The Icon component can be used to display icon. */
declare const Icon: (props: IconProps) => JSX.Element;

interface ImageProps {
    /** Image src */
    src: string;
    /** Image caption text */
    caption?: string;
    /** Image alt text */
    alt?: string;
    /** Custom class to add to the figure element */
    className?: string;
}
/** Image with caption or without caption */
declare const Image: (props: ImageProps) => JSX.Element;

interface LinkProps {
    children: React.ReactNode;
    href: string;
    newTab?: boolean;
    className?: string;
    rel?: string;
}
declare const Link: (props: LinkProps) => JSX.Element;

interface VideoProps {
    /** Video src */
    src: string;
    /** Video caption */
    caption?: string;
    /** Video title */
    title?: string;
    /** Video custom class */
    className?: string;
}
/** Video with caption and title */
declare const Video: (props: VideoProps) => JSX.Element;

interface LeadTextProps {
    /** LeadText text */
    text: string;
    /** LeadText custom class */
    className?: string;
}
/** A LeadText indicates that text is highlight, that can be used to draw more attention to content */
declare const LeadText: (props: LeadTextProps) => JSX.Element;

interface CalloutProps {
    /** The Callout title. */
    title: string;
    /** The heading level the callout title should be. */
    heading_level: heading_level;
    /** The Callout's content. */
    children: React.ReactNode;
    /** The Callout's context. */
    context?: context;
    /** The Callout's custom class */
    className?: string;
}
/** Callout box is to show the information with category */
declare const Callout: (props: CalloutProps) => JSX.Element;

interface CTAProps {
    /** The label displayed on the CTA */
    text: string;
    /** The CTA link destination */
    href: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    /** The CTA alignment */
    justify?: justify;
    /** Custom class name for component container */
    className?: string;
    /** CTA presence */
    presence?: 'subtle';
    /** Determines if the CTA is Disabled */
    disabled?: boolean;
}
/** A call to action, or CTA, is a key interaction element that brings actions or points of interest to the user's attention. */
declare const CallToAction: (props: CTAProps) => JSX.Element;

interface CardProps {
    /** The heading level the card should use */
    heading_level: heading_level;
    /** The card title text */
    title: string;
    /** The sub title for card */
    subTitle?: string;
    /** The card link destination */
    href?: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    /** Information about the destination's content */
    description?: React.ReactNode;
    /** Card image props */
    img?: {
        src: string;
        alt?: string;
        aspectRatio?: aspect_ratio;
    };
    /** Card presence */
    presence?: 'subtle';
    /** Card text alignment */
    align?: align;
    /** Horizontal card layout */
    isLandscape?: boolean;
    /** Card custom class */
    className?: string;
}
/** Card can be used to surface content and link to other pages that may be relevant to the user, providing a preview of what the user can expect to find on that page. */
declare const Card: (props: CardProps) => JSX.Element;

interface CodeBlockProps {
    /** Language of the CodeBlock */
    lang: codeLanguage;
    /** Caption for the CodeBlock */
    caption?: string;
    /** Code Syntax of the CodeBlock */
    children: React.ReactNode;
    /** Code custom class */
    className?: string;
}
/** The code block is use to display a code snippets with language and copy button */
declare const CodeBlock: (props: CodeBlockProps) => JSX.Element;

interface DataHighlightProps {
    /** The statistic to display */
    title: string;
    /** Information about the statistic */
    description: string;
    /** Lead-in to the statistic */
    lead?: string;
    /** */
    align?: align;
    /** Custom class name */
    className?: string;
}
/** Data Highlights can be used to highlight various statistical points of interests. The combined lead, title, and description must read as a single sentence. */
declare const DataHighlight: (props: DataHighlightProps) => JSX.Element;

interface EventProps {
    /** The heading level the Event should use */
    heading_level: heading_level;
    /** The event title */
    title: string;
    /** Event start datetime */
    start: Date | string;
    /** Event end datetime */
    end: Date | string;
    /** A link to the event details page */
    href?: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    /** Physical or virtual location of the event */
    location?: string;
    /** Custom class name for component container */
    className?: string;
}
/** The Event component can be used to display an event's details with link to more information about the event. */
declare const Event: (props: EventProps) => JSX.Element;

interface EventFeedProps {
    title: string;
    limit: number;
    heading_level?: 1 | 2 | 3 | 4 | 5;
    maxColumns?: number;
    filters?: string;
    align?: align;
    groupSlug?: string;
    className?: string;
}
/** The EventFeed component can be used to display an event's details with link to more information about the event. */
declare const EventFeed: (props: EventFeedProps) => JSX.Element;

interface LinkBoxProps {
    /** The title of the link */
    title: string;
    /** The link's destination */
    href: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    /** Supporting description of the link's destination */
    description?: string;
    /** Decorative icon */
    icon?: icon;
    /** Custom class name */
    className?: string;
    presence?: 'default' | 'prominent';
}
/**
 * Link boxes can be used to surface content and link to other pages that may be relevant to the user, providing a preview of what the user can expect to find on that page.
 */
declare const LinkBox: (props: LinkBoxProps) => JSX.Element;

interface LinkItemProps {
    /** Title of the list item */
    title: string;
    /** URL for the list item */
    href: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    /** Icon for the list item */
    icon?: icon;
}
interface LinkListProps {
    /** List of links */
    list: LinkItemProps[];
    /** Max number of columns */
    maxColumns?: number;
    /** Custom class name */
    className?: string;
}
/** Link List can be used to surface content and link to other pages that may be relevant to the user. */
declare const LinkList: (props: LinkListProps) => JSX.Element;

type SocialLink = {
    /** Social link label */
    label: string;
    /** Social link */
    href: string;
    /** Social link Icon */
    iconName: icon;
    /** To know whether it is a Brand Icon */
    isBrand?: boolean;
};
interface SocialLinksProps {
    items: SocialLink[];
    /** Alignment for the social links */
    justify?: justify;
    /** Determines whether to show label or not*/
    showLabel?: boolean;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
    className?: string;
}
declare const SocialLinks: (props: SocialLinksProps) => JSX.Element;

interface SwatchProps {
    /** Name of the swatch */
    name: string;
    /** Swatch hex code */
    hex: string;
}
declare const Swatch: (props: SwatchProps) => JSX.Element;

interface Step {
    /** Title of the Steps Item */
    title: string;
    /** Contents of the Steps Item */
    children: React.ReactNode;
}
interface StepsProps {
    /** Step details */
    stepItems: Step[];
    /** Limits the number columns the Gird component will create */
    maxColumns?: number;
    /** The heading level the Steps Item should use */
    heading_level: heading_level;
    /** Steps presence */
    presence?: 'subtle' | 'elevated';
    /** Custom class name */
    className?: string;
}
/** Steps is used to create information stepwise to follow, it contains title and content */
declare const Steps: (props: StepsProps) => JSX.Element;

type TagProps = {
    /** Tag label */
    label: string;
    /** Tag link */
    href?: string;
    /** Determines if the link opens in a new tab */
    newTab?: boolean;
};
interface TagListProps {
    items: TagProps[];
    /** Alignment for the Tags */
    justify?: justify;
    /** Custom class name */
    className?: string;
}
/** TagList is the list Tags */
declare const TagList: (props: TagListProps) => JSX.Element;

interface GridProps {
    /**  Items to be displayed inside the Grid */
    items: React.ReactNode[];
    /**  HTML element the Grid should use as a base */
    element: 'ul' | 'ol' | 'div';
    /** Limits the number columns the Gird component will create */
    maxColumns?: number;
    /** Additional CSS classes to pass to the root Grid element */
    className?: string;
}
/** The `Grid` component is a generic layout tool that can be used to arrange almost any kind of content into columns that fluidly wrap based on content and container width. */
declare const Grid: (props: GridProps) => JSX.Element;

interface GroupProps {
    /** The group content */
    children: React.ReactNode;
    /** Any additional classes */
    className?: string;
    /** The HTML element the group should use - defaults to div */
    element?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer';
    /** Determines how much visual weight to give the section - is ignored if background is provided */
    contrast?: 'more' | 'most';
    /** Sets the background image for the group and its overlay */
    background?: {
        img: string;
        overlay: 'dark' | 'light';
    };
    /** The width the group's container should follow - defaults to 'normal' */
    width?: width;
    /** The width the group's content should follow - inherits 'width' unless specified */
    innerWidth?: width;
}
declare const Group: (props: GroupProps) => JSX.Element;

interface PageProps {
    /** The title of the page */
    title: string;
    /** The page content */
    children: React.ReactNode;
    /** The page hero content - must include an h1 element */
    hero?: React.ReactNode;
    /** Supplementary navigation */
    subNav?: React.ReactNode;
    /** The page sidebar nav */
    sidebar?: React.ReactNode;
}
/** The `Page` component takes metadata about the page and handles in page specific layout. The root element of this component is `main`. */
declare const Page: (props: PageProps) => JSX.Element;

/** This is the required logo component for every UA webpage */
declare const BrandBar: () => JSX.Element;

/** This is the legal footer component required for every UA webpage. */
declare const BrandFooter: () => JSX.Element;

interface BreadcrumbProps {
    /** The label for breadcrumb */
    label: string;
    /** The breadcrumb destination */
    href: string;
    /** Current page of breadcrumb */
    currentPage?: boolean;
}
/**
 * Breadcrumbs
 */
declare const Breadcrumbs: (props: {
    breadcrumbList: BreadcrumbProps[];
}) => JSX.Element;

interface PaginationProps {
    /** The current page number */
    page: number;
    /** The number of items on the page */
    pageSize: number;
    /** An array of page size options */
    pageSizes?: number[];
    /** The total number of items */
    itemCount: number;
    /** Change handler */
    changeHandler: (page: number, pageSize: number) => void;
}
declare const Pagination: (props: PaginationProps) => JSX.Element;

interface PrimaryNavItem {
    label: string;
    url: string;
    children?: {
        label: string;
        url: string;
    }[];
}
/** This is the Primary Navigation for every UA webpage. */
declare const PrimaryNavigation: (props: {
    menuItems: PrimaryNavItem[];
}) => JSX.Element;

interface SecondaryNavItem {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
        children?: {
            label: string;
            href: string;
        }[];
    }[];
}
/** A secondary navigation element can be added to a page to help users navigate between related content. */
declare const SecondaryNavigation: (props: {
    menuItems: SecondaryNavItem[];
}) => JSX.Element;

interface SiteFooterProps {
    /** The site footer contents */
    children: React.ReactNode;
}
/** This is the site footer component required for every UA webpage. */
declare const SiteFooter: (props: SiteFooterProps) => JSX.Element;

interface TitleBarProps {
    /** The name of the website */
    title: string;
    /** Subtitle text */
    subtitle?: string;
    /** Subtitle destination */
    subtitleURL?: string;
    /** Navigation object */
    menuItems?: PrimaryNavItem[];
}
declare const TitleBar: (props: TitleBarProps) => JSX.Element;

export { Accordion, Blockquote, BrandBar, BrandFooter, Breadcrumbs, CallToAction, Callout, Card, CodeBlock, DataHighlight, Event, EventFeed, Grid, Group, Heading, Icon, Image, LeadText, Link, LinkBox, LinkList, Page, Pagination, PrimaryNavigation, SecondaryNavigation, SiteFooter, SocialLinks, Steps, Swatch, TagList, TitleBar, Video };
