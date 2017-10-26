
window.sistory4 = {

	configuration : {
		restUrl : 'http://localhost:8083/index.php'
	},

	templates : {

		subCategory : '\
			<div class="large-4 medium-4 small-12 columns">\
				<li class="list-item">\
				    <div class="browse-entry">\
				        <a data-level="{2}" data-idx="{1}" href="#">\
				            <div class="img">\
				            	<img src="images/saved_resource(7)">\
				            </div>\
				            <div class="bd">\
				                <div class="l-upper">\
				                	<span class="title">{0}</span>\
				                </div>\
				            </div>\
				        </a>\
				    </div>\
				</li>\
			</div>',

		breadcrumbs : '\
			<ul class="breadcrumbsMain">\
		    	<li><a href="#"><span class="svg-icon-home"></span>Home</a></li>\
		    	{0}\
			</ul>',

		breadcrumbsItem : '<li><a href="#">{0}</a></li>', 		

		breadcrumbsLastItem : '<li class="active"><span><strong>{0}</strong></span></li>',

		resultItem :
			'<li>\
		        <article class="search-list-item">\
		            <div class="item-preview">\
		                <div class="item-image">\
		                    <div class="inner">\
		                        <img src="{0}">\
		                    </div>\
		                </div>\
		            </div>\
		            <div class="item-info ">\
		                <h2>\
		                    <a href="#">{1}</a>\
		                </h2>\
		                <p class="excerpt">{2}</p>\
		                <ul class="item-concepts comma-list">\
		                    <li>{3}</li>\
		                </ul>\
		                <div class="item-origin"><a href="#" class="external" target="_blank">{4}</a>\
		                </div>\
		                <footer>\
		                    <div class="item-metadata">\
		                        <img src="images/{5}.png">\
		                        <span class="highlight-text hide-with-grid">{6}</span>\
		                    </div>\
		                </footer>\
		            </div>\
		        </article>\
		    </li>',

		resultBanner : '<div class="results-header">\
		    <div class="result-info">1 - 10 od 123 rezultatov</div>\
		    <div class="result-viewtype">\
		        <ul class="button-bar button-bar-small">\
		        <li class="button-bar__item">\
		            <a href="" class="button-bar__button" role="button">\
		                <img src="images/grid.png">Mreža\
		            </a>\
		        </li>\
		        <li class="button-bar__item">\
		            <a href="" class="button-bar__button" role="button">\
		                <img src="images/list.png">Seznam\
		            </a>\
		        </li>\
		        </ul>   \
		    </div>\
		</div>\
		<ol></ol>',

		addBanner : '<div class="large-auto cell">\
						<div class="coll-item">\
					  		<div class="category-flag"></div>\
					  		<div class="inner"><span class="title"></span></div>\
							<div class="coll-image img1">\
							</div>\
					    </div>\
					</div>',

		item :
			'<section class="object-display" id="maincontent"> \
			    <div class="object-media-wrap single-item "> \
			        <div class="media-viewer">\
			            <div class="single-item-thumb">\
			                <div>\
			                    <div class="inner">\
			                        <a href="#">\
			                            <span title="Odpri ta predstavnostni element" class="image">\
			                            <img src="http://www.sistory.si/publikacije/image/?id=911&width=247&height=350">\
			                        </a>\
			                    </div>\
			                </div>\
			            </div>\
			        </div>\
			    </div>\
			    <span class="downloads">Prenesi</span>\
			</section>',

		itemDetails : 
			'<div class="lc">\
		        <div class="object-overview">\
		            <div class="data-section no-border object-title cf">\
		                <h3 class="subsection-label">Naziv</h3>\
		                <div class="subsection-content">\
		                    <h2 class="object-title">Homo spectator\n Uvod v muzejsko pedagogiko\n [elektronski vir]</h2>\
		                </div>\
		            </div>\
		            <div class="data-section cf">\
		                <h3 class="subsection-label">Splošno</h3>\
		                <div class="subsection-content">\
		                    <ul class="data-group">\
		                        {0}\
		                    </ul>\
		                </div>\
		            </div>\
		        </div>\
		        <div class="object-actions cf">\
				    <h4>Več informacij</h4>\
				    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/2.5/si/"><img alt="Creative Commons licenca" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/2.5/si/88x31.png"></a>\
				    <h4>Trajna povezava</h4>\
				    <a href="http://hdl.handle.net/11686/911">http://hdl.handle.net/11686/911</a>\
				    <h4>COBBIS</h4>\
				    <a href="#">COBISS.SI-ID 247238656</a>\
				 </div>\
			 </div>',

		itemDetailsLi : '<li>\
		    <section>\
		        <h4 class="data-header">{0}</h4>\
		        <ul class="comma-list data-group">\
		            <li><a href="#">{1}</a></li>\
		        </ul>\
		    </section>\
		 </li>'	 	

	}
};

window.publicationData =[

	{
	    img : "http://www.sistory.si/publikacije/image/?id=4896&width=161&height=227", 
	    naziv : "Arhiv Republike Slovenije",
	    desc : 'ZIzdaja je primarno dostopna v Digitalni knjižnici Pedagoškega inštituta. Jezik: slovenski Vrsta gradiva: Besedilo Leto: 2009 Ključne besede: muzejska pedagogika, Museum pedagogics Založnik(i): Pedagoški inštitut, Ljubljana Zbirka: Digitalna knjižnica. Dissertationes',
	    kategorija : "Literatura / Monografije",
	    tip : "Založba",
	    media : "link",
	    mediaNaziv : "Povezava"

	},

	{
	    img : "http://www.sistory.si/publikacije/image/?id=9165&width=247&height=350", 
	    naziv : "Nacizem in Nemci v Jugoslaviji",
	    desc : "Nacizem in Nemci v Jugoslaviji: 1933-1941\n Avtor(ji): Biber, Dušan\n Jezik: slovenski\n Vrsta gradiva: Besedilo\n Leto: 1966\n Ključne besede: nacizem, nemška manjšina, Jugoslavija, 1933-1941, nazism, German minority, Yugoslavia, 1933-1941\n Založnik(i): Cankarjeva založba, Ljubljana\n",
	    kategorija : "Literatura / Monografije",
	    tip : "Cankarjeva založba",
	    media : "pdf",
	    mediaNaziv : "PDF Dokument"
	},

	{
	    img : "http://www.sistory.si/publikacije/image/?id=15588&width=247&height=350", 
	    naziv : "Delček mladosti Spomini na delo v Ljudski mladini Slovenije in Jugoslavije ter SKOJ v letih 1947-1950",
	    desc : "Avtor(ji): Perovšek, France\n Jezik: slovenski\n Vrsta gradiva: Besedilo\n Leto: 2004\n Ključne besede: Ljudska mladina Slovenije, Zveza komunistične mladine Jugoslavije, mladinske delovne akcije, gospodarstvo, šolstvo, kultura, tisk, telesna vzgoja in šport, Ljudska mladina Slovenije/People's Youth of Slovenia, Zveza komunistične mladine Jugoslavije/Association of the Communist Youth of Yugoslavia, youth work actions, economy, culture, physical education and sport\n Založnik(i): Društvo piscev zgodovine NOB Slovenije, Ljubljana\n Soavtor(ji): France Pečelin (gl. ur.), Jurij Perovšek (ur.), Marjetka Kastelic (lekt.)\n Zbirka: Partizanski knjižni klub; 42\n ",
	    kategorija : "Literatura / Monografije",
	    tip : "Društvo piscev zgodovine NOB Slovenije",
	    media : "pdf",
	    mediaNaziv : "PDF Dokument"
	},


	{
	    img : "http://www.sistory.si/publikacije/image/?id=955&width=247&height=350", 
	    naziv : "Slovenski železničarji pod italijansko okupacijo v Ljubljanski pokrajini",
	    desc : "Slovenski železničarji pod italijansko okupacijo v Ljubljanski pokrajini\n Oris nastanka in razvoja organizacije Osvobodilne fronte in oblike narodnoosvobodilnega \n boja za železnici 1941-1943\n Avtor: Vidovič Miklavčič, Anka\n Leto: 1980\n Recenzija monografije v Prispevkih za zgodovino delavskega gibanja.\n ",
	    kategorija : "Literatura / Monografije",
	    tip : "Inštitut za novejšo zgodovino",
	    media : "img",
	    mediaNaziv : "Slika"
	},


	{
	    img : "http://www.sistory.si/publikacije/image/?id=4870&width=161&height=227", 
	    naziv : "Liberalizem in vprašanje slovenstva Nacionalna politika liberalnega tabora v letih 1918-1929",
	    desc : "Študija Liberalizem in vprašanje slovenstva obravnava temo, ki danes, po ustanovitvi in mednarodni uveljavitvi slovenske nacionalne države Republike Slovenije gotovo predstavlja enega vidnejših izzivov, s katerimi se po izreku t. i. jugoslovanske dobe srečuje slovensko zgodovinopisje. Novejšo slovensko zgodovino namreč vse od revolucijskega programa Zedinjene Slovenije leta 1848 na različne načine preveva osrednja misel - doseči osebno in narodno osvoboditev Slovencev ter po vzoru drugih narodov okusiti polno uveljavitev. svobodo, suverenost in enakopraven položaj v občestvu narodov sveta. Vprašanje slovenske narodne osvoboditve in emancipacije je postalo osrednja preokupacija vsakega idejnega in političnega gibanja, ki se je v zadnjem stoletju in pol teoretsko ali politično preizkušalo na slovenskih tleh.",
	    kategorija : "Literatura / Monografije",
	    tip : "Modrijan založba",
	    media : "docx",
	    mediaNaziv : "Word dokument"
	},

	{
	    img : "http://www.sistory.si/publikacije/image/?id=20424&width=247&height=350", 
	    naziv : "Mojega življenja pot : spomini dr. Vladimirja Ravniharja",
	    desc : "Prvi Ravnihar, ki ga omenja Slovenski biografski leksikon, je Janez (1798-1876), rojen ob koncu 18. stoletja v Škofji Loki, oskrbnik raznih graščin in vinski trgovec. Sledijo mu trije njegovi sinovi: Ludvik (1827-1901), sodnik in politik, v letih 1867- 1870 prvi slovenski deželni poslanec dolenjskih mest, Franc (1832-1904), deželni uradnik, eden ustanoviteljev ljubljanske čitalnice, Sokola, Dramatičnega društva in Glasbene matice, in sodnik Nikomed (1840-1928). Tretjo generacijo zastopa v Slovenskem biografskem leksikonu Francetov sin Vladimir (1871-1954), pisec naših spominov, četrto pa njegova otroka Evgenij (1912-1949) in Božena (rojena 1914). Dr. Vladimir Ravnihar je s svojim delom v Glasbeni matici, Sokolu in drugih društvih nadaljeval in širil očetovo delo, po politični aktivnosti pa je daleč presegel strica Ludvika. O političnih prilikah njegovega časa naj tu spregovorim nekaj besed.",
	    kategorija : "Literatura / Monografije",
	    tip : "Oddelek za zgodovino Filozofske fakultete",
	    media : "pdf",
	    mediaNaziv : "PDF Dokument"
	},

	{
	    img : "http://www.sistory.si/publikacije/image/?id=911&width=247&height=350", 
	    naziv : "Homo spectator - Uvod v muzejsko pedagogiko",
	    desc : "Izdaja je primarno dostopna v Digitalni knjižnici Pedagoškega inštituta.\n Jezik: slovenski\n Vrsta gradiva: Besedilo\n Leto: 2009\n Ključne besede: muzejska pedagogika, Museum pedagogics\n Založnik(i): Pedagoški inštitut, Ljubljana\n Zbirka: Digitalna knjižnica. Dissertationes",
	    kategorija : "Literatura / Monografije",
	    tip : "Pedagoški inštitut",
	    media : "link",
	    mediaNaziv : "Povezava"
	},

	{
	    img : "http://www.sistory.si/publikacije/image/?id=955&width=247&height=350", 
	    naziv : "Slovenski železničarji pod italijansko okupacijo v Ljubljanski pokrajini",
	    desc : "Slovenski železničarji pod italijansko okupacijo v Ljubljanski pokrajini\n Oris nastanka in razvoja organizacije Osvobodilne fronte in oblike narodnoosvobodilnega \n boja za železnici 1941-1943\n Avtor: Vidovič Miklavčič, Anka\n Leto: 1980\n Recenzija monografije v Prispevkih za zgodovino delavskega gibanja.\n ",
	    kategorija : "Literatura / Monografije",
	    tip : "Inštitut za novejšo zgodovino",
	    media : "img",
	    mediaNaziv : "Slika"
	}
];

window.pubDetails = [
	{
		key : "Avtor(ji):",
		item: "Tavčar, Lidija"
	},
	{
		key : "Jezik:",
		item: "slovenski"
	},
	{
		key : "Vrsta gradiva:",
		item: "Besedilo"
	},
	{
		key : "Leto:",
		item: "2009"
	},
	{
		key : "Ključne besede:",
		item: "muzejska pedagogika, Museum pedagogics"
	},
	{
		key : "Založnik(i):",
		item: "Pedagoški inštitut, Ljubljana"
	},
	{
		key : "Zbirka:",
		item: "Digitalna knjižnica. Dissertationes"
	},
	{
		key : "Identifier:",
		item: "COBISS.SI-ID 247238656"
	}
];