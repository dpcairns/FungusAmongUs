const mushData = [
    {
    id: mush1,
    commonName: 'Golden Chanterelle',
    scientificName: 'Cantharellus cibarius',
    image: www.placekitten.com/300/300,
    description: 'Cap bright orange to yellow-orange, bald, usually concave or wavy when mature. Gills well spaced, shallow, blunt-edged and fairly thick, often with connecting veins in between. Gills same color as cap or paler, running down the stalk. Stalk colored like cap or slightly paler, solid (not hollow). Flesh white or with a tinge of yellow. Growing on the ground.',
    edibility: 'Very popular because of it’s cheerful color, delicate flavor, and fruity fragrance. It is usually free of maggots, which is nice!',
    region: 'Coast, Northwestern Oregon, Southwestern Oregon'
    },

    {
        id: mush2,
        commonName: 'Oyster Mushroom',
        scientificName: 'Pleurotus ostreatus',
        image: www.placekitten.com/300/300,
        description: 'Growing shelf-like on dead trees, logs, or stumps. Cap medium-sized to large (>2" broad). Cap bald, white to grey, dark grey, tan or brown. Gills white or at least pale, running down stalk (if stalk is present). Stalk short, thick and off-center or entirely absent. Veil, ring and volva absent. Spores whitish or tinged lilac.',
        edibility: 'Delicious grilled or fried; it is very popular and is now grown commercially.',
        region: 'Coast, Northwestern Oregon, Southwestern Oregon, Central Oregon',
    },

    {
        id: mush3,
        commonName: 'Prince Mushroom',
        scientificName: 'Agaricus augustus',
        image: www.placekitten.com/300/300,
        description: 'Cap with brown to golden-brown fibers or scales, at least 3" broad when mature. Cap marshmallow-shaped when yourn (before veil breaks). Edge of cap staining and remaining yellow when surface is rubbed repeatedly. Odor sweet (like almond extract), at least when flesh is crushed. Gills free from stalk, white when young, dark chocolate-brown in old age. Veil present, white, covering the gills at first, then forming a skirt-like ring on stalk. Stalk at least 1/2" thick, sheathed with scales below the veil (at least when young). Base of stalk without a volva, the tip yellowing only slightly if at all when cut.',
        edibility: 'One of the very best! The sweet fragrance and flavor are a real treat.',
        region: 'Coast, Northwest Oregon, Central Oregon'
    },

    {
        id: mush4,
        commonName: 'King Bolete aka Porcini',
        scientificName: 'Boletus edulis',
        image: www.placekitten.com/300/300,
        description: 'Cap brown to yellow-brown, red-brown or dark red (but often whitish when still covered by humus), bald. Underside of cap with a sponge layer; pore (sponge) surface white when young, then yellowish, brown or olive in age, not staining blue or brown when bruised. Stalk thick (at least 1"), white to brown (never yellow). Stalk surface finely netted, at least at top. Flesh white, not staining blue or brown when cut. Taste mild or nutty, not bitter.',
        edibility: 'One of the most sought after of all mushrooms, delectable fresh or dried.',
        region: 'Coast, Northwest Oregon, Central Oregon'
    },
    
    {
        id: mush5,
        commonName: 'Chicken of the Woods',
        scientificName: 'Laetiporus sulphureus',
        image: www.placekitten.com/300/300,
        description: 'Mushroom shelflike, growing in overlapping masses or rosettes (or sometimes singly) on logs and stumps. Cap (upper surface of shelf) bright yellow-orange to orange or salmon-colored. Underside of cap bright sulfur-yellow when fresh. Stalk absent of nearly absent.',
        edibility: 'Widely regarded as edible when tender, but often causing gastrointestinal distress particularly when older. Used like chicken in soups and pot pies.',
        region: 'Coast, Northwest Oregon, Central Oregon'
    },
    
    {
        id: mush6,
        commonName: 'Lions Mane',
        scientificName: 'Hericium erinaceus',
        image: www.placekitten.com/300/300,
        description: 'Mushroom with one large clump of spines hanging like icicles from a tough, unbranched base. Spines 1-3" long when mature, white or yellowish. Growing on wood of hardwoods.',
        edibility: 'Excellent, with a texture reminiscent of seafood. It is grown commercially on a small scale and served in French restaurants under the name, pom pom du blanc.',
        region: 'Northwest Oregon, Central Oregon, Southwest Oregon'
    },
    
    {
        id: mush7,
        commonName: 'Hedgehog Mushroom',
        scientificName: 'Hydnum repandum',
        image: www.placekitten.com/300/300,
        description: 'Cap and stalk white to pale orange or dull orange. Underside of cap with a layer of brittle spines or teeth, white to pale orange. Surface of cap bald (but may break up to form scales). Flesh white and brittle, not woody or leathery.',
        edibility: 'A popular edible. Many prefer it to the chanterelle, which it resembles in color and texture. When gathering it, be sure to keep spines free of dirt.',
        region: 'Coast, Northwest Oregon'
    },

    {
        id: mush8,
        commonName: 'Cauliflower Mushroom',
        scientificName: 'Sparassis crispa',
        image: www.placekitten.com/300/300,
        description: 'Mushroom profusely branched: brain-like or resembling a sea coral or bouquet of egg noodles. Entire mushroom white to slightly yellowish when fresh (but old or weathered specimens often tan). Individual branches flattened (like ribbons or egg noodles), rather tough. Branches arising from a tough, deeply rooting base. Odor fragrant. Growing at or near the bases of conifers.',
        edibility: 'Prized for its fragrance and resistance to decay, but chewy and difficult to clean. Thorough cooking is necessary to make it tender; precooked, it goes well with potatoes in a casserole.',
        region: 'Northwest Oregon, Central Oregon, Southwest Oregon'

    },

    {
        id: mush9,
        commonName: 'Morel',
        scientificName: 'Morchella esculenta, elata, angusticeps',
        image: www.placekitten.com/300/300,
        description: 'Cap round to cone-shaped or like a Christmas tree, honeycombed with pits and ridges. In the case of elata or angusticeps, pits fairly dark (olive-brown, dark grey, black or reddish-brown). In the case of esculenta, pits and ridges will be buff, tan or yellow-brown. Ridges colored like pits or darker. Cap completely intergrown with the stalk (joined to it along its full length). Entire mushroom hollow. Stalk without a sack or cup at base.',
        edibility: 'Among the most highly prized of all mushrooms, delicious fresh or dried. It should always be cooked.',
        region: 'Northwest Oregon, Central Oregon, Eastern Oregon'
    },

    {
        id: mush10,
        commonName: 'Lobster Mushroom',
        scientificName: 'Hypomyces lactifluorum',
        image: www.placekitten.com/300/300,
        description: 'Mushroom engulfing its host (a gilled mushroom) in a layer of bright orange to red or sometimes purple-red tissue, making the whole thing look more or less like and upside-down pyramid. Gills of the host mushroom reduced to blunt ridges or not visible at all, the surface covered instead with tiny pimples. Gills, when present, not forked or veined. Flesh white and crisp when fresh.',
        edibility: 'Delicious when still crisp - a definite improvement over the short-stemmed russula! It should be sauteed.',
        region: 'Coast, Northwest Oregon, Central Oregon'
    },

    {
        id: mush11,
        commonName: 'White Matsutake',
        scientificName: 'Tricholoma magnivelare',
        image: www.placekitten.com/300/300,
        description: 'Cap white to slightly yellowish (but often with brown or cinnamon stains). Odor strongly spicy-fragrant, like cinnamon or Ret Hots (best detected by sniffing the gills). Gills white when fresh (but often with cinnamon stains in age). Gills typically notched (dipping in) where they join the stalk, not funning down it. Veil present, covering the gills at first, then forming a prominent ring on stalk. Base of stalk without a bulb or volva. Growing on ground.',
        edibility: 'Highly prized for its aroma and complex flavor.',
        region: 'Northwest Oregon, Central Oregon, Southwest Oregon'
    },

    {
        id: mush12,
        commonName: 'Fairy Ring Mushroom',
        scientificName: 'Marasmius oreades',
        image: www.placekitten.com/300/300,
        description: 'Growing in groups or rings in grass. Cap small (<2" broad), often (but not always!) with a large blunt knob at center. Cap whitish to tan, bald, not sticky. Gills white to pale tan, fairly well spaced and broad, not running down the stalk. Stalk thin, tough, pliant. Veil, ring and volva absent. Spores white.',
        edibility: 'Excellent. The stems are tough so use only the caps (you can keep them clean by harvesting with scissors). Sun dried specimens revive beautifully when moistened.',
        region: 'Coast, Northwest Oregon, Central Oregon, Southwest Oregon, Eastern Oregon'
    },

    {
        id: mush13,
        commonName: 'White Chanterelle',
        scientificName: 'Cantharellus subalbidus',
        image: www.placekitten.com/300/300,
        description: 'Entire mushroom dull white (but bruised areas usually yellowish or orangish). Cap usually concave or wavy when mature, bald. Gills running down the stalk, well spaced, shallow, blunt-edged, and fairly thick, often with connecting veins in between. Stalk solid (not hollow), not snapping open cleanly like a piece of chalk. Veil, ring and volva absent. Growing on ground in woods, not in fused clusters.',
        edibility: 'Popular, some prefer it to the golden chanterelle.',
        region: 'Coast, Northwest Oregon, Central Oregon, Southwest Oregon'
    },

    {
        id: mush14,
        commonName: 'Honey Mushrooms',
        scientificName: 'Armillaria mellea',
        image: www.placekitten.com/300/300,
        description: 'Growing in clumps on trees, logs and stumps. Gills white to yellowish or flesh-colored but not brown, slightly decurrent (running down the stalk). Stalk tough, often long, with a white stringy pith inside. Veil present, at first covering the gills, then forming a ring on the upper stalk. Spores white (lowermost caps of a cluster often coated with white spore dust.',
        edibility: 'Often eaten, but sometimes causing stomach upsets. Always cook it well and avoid those growing on buckeye or hemlock, as they are more apt to cause trouble.',
        region: 'Central Oregon, Eastern Oregon'
    },

    {
        id: mush15,
        commonName: 'Shrimp Mushroom',
        scientificName: 'Russula xerampelina',
        image: www.placekitten.com/300/300,
        description: 'Cap red to purple or purple-brown, sometimes partly or entirely green or brown. Surface of cap sticky or slimy when moist, usually with adhering debris when dry. Gills whitish to yellowish or with brownish stains. Stalk with at least a blush of rose (sometimes entirely rosy), staining yellowish when bruised or handled, then brown. Entire mushroom brittle, the stalk snapping open cleanly like a piece of chalk. Taste not peppery (chew on a small piece of cap). Odor fishy or shrimpy when old (absent when young). Veil, ring and volva absent. Spores yellowish.',
        edibility: 'Delicious! The crisp young caps can be sauteed, toasted or stuffed and broiled; older ones develop and strong shrimpy odor when cooked but are still tasty.',
        region: 'Southwest Oregon'
    },

    {
        id: mush16,
        commonName: 'Oregon White Truffle',
        scientificName: 'Tuber gibbosum',
        image: www.placekitten.com/300/300,
        description: 'Mushroom potato-like, buff to tan, brown or red-brown (darker when mature). Exterior without warts. Interior solid, very firm, marbled with veins. Interior white when young, dark brown or reddish marbled with whitish veins when mature. Stalk absent. Odor at maturity strong and somewhat garlicky. Growing underground in association with Douglas-fir, christmas tree farms are a good place to look.',
        edibility: 'Some chefs rate it on par with the famous white truffle of Italy.',
        region: 'Coast, Northwest Oregon, Central Oregon, Southwest Oregon'
    },

    {
        id: mush17,
        commonName: 'Witch\'s Butter',
        scientificName: 'Tremella mesenterica',
        image: www.placekitten.com/300/300,
        description: 'Mushroom gelatinous (jelly-like), yellow to orange. Shape variable: usually lobed and wrinkled or brain-like, but blob-like if swollen with water. Stalk absent. Growing on dead hardwoods.',
        edibility: 'Harmless but flavorless. But looks real cool!',
        region: 'Coast, Northwest Oregon, Central Oregon, Southwest Oregon, Eastern Oregon'
    },

    {
        id: mush18,
        commonName: 'Western Giant Puffball',
        scientificName: 'Calvatia booniana',
        image: www.placekitten.com/300/300, 
        description: 'Mushroom large (at lease 8" broad when fully grown). Mushroom round or oblong (like a flattened sphere), without a prominent narrowed base or stalk. Exterior with broad warts or plaques, white to pale tan. Interior solid and white when young, powdery and brown or olive-brown when old.',
        edibility: 'Edible when firm and white inside; avoid those showing traces of yellow or green, as they may cause stomach upsets. The firm, tofu-like flesh is best cubed and simmered in soups, or sliced and then breaded and fried.',
        region: 'Northwest Oregon, Central Oregon, Southwest Oregon'
    },

    {
        id: mush19,
        commonName: 'Toothed Jelly Fungus',
        scientificName: 'Pseudohydnum gelatinosum',
        image: www.placekitten.com/300/300,
        description: 'Mushroom pliant and rubbery, with a cap and stalk. Cap small, tongue-shaped or fan-shaped, translucent white to gray or brownish. Underside of cap lined with small spines or "teeth". Stalk attached to side of cap. Flesh gelatinous (jelly-like) or rubbery, not brittle.',
        edibility: 'Although bland, it can be candied or marinated or mixed with honey and cream.',
        region: 'Coast, Northwest Oregon, Central Oregon'
    },

    {
        id: mush20,
        commonName: 'Turkey Tail',
        scientificName: 'Trametes versicolor',
        image: www.placekitten.com/300/300,
        description: 'Mushroom shelf-like, bracket-like, fan-shaped or forming rosettes. Texture tough: leathery and pliant when fresh, rigid when dry. Cap (top of shelf or bracket) with narrow concentric zones of various colors, velvety-hairy zones usually alternating with silky-smooth ones. Underside with a thin, tough sponge layer; pore (sponge) surface whitish to buff. Stalk more or less absent. Flesh white or pale, thin. Growing on hardwoods.',
        edibility: 'Too tough for food, but some people believe it stimulates the immune system. It can be used raw as a natural chewing gum while hiking, or taken as a tonic.',
        region: 'Coast, Northwest Oregon, Central Oregon, Southwest Oregon, Eastern Oregon'
    },

];