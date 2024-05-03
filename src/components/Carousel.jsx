import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/carousel.css';
import { Link } from 'react-router-dom';
import Images from './Images';
import Icons from './Icons';

export default function Carousel() {
	return (
		<div
			id="hero-carousel"
			className="carousel slide bg-black"
			data-bs-ride="carousel"
			data-bs-interval="5000"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#hero-carousel"
					className="active"
					aria-current="true"
					data-bs-slide-to="0"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="4"
					aria-label="Slide 5"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="5"
					aria-label="Slide 6"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="6"
					aria-label="Slide 7"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="7"
					aria-label="Slide 8"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="8"
					aria-label="Slide 9"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="9"
					aria-label="Slide 10"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="10"
					aria-label="Slide 11"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="11"
					aria-label="Slide 12"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="12"
					aria-label="Slide 13"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="13"
					aria-label="Slide 14"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="14"
					aria-label="Slide 15"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="15"
					aria-label="Slide 16"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="16"
					aria-label="Slide 17"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="17"
					aria-label="Slide 18"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="18"
					aria-label="Slide 19"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="19"
					aria-label="Slide 20"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="20"
					aria-label="Slide 21"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="21"
					aria-label="Slide 22"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="22"
					aria-label="Slide 23"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="23"
					aria-label="Slide 24"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="24"
					aria-label="Slide 25"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="25"
					aria-label="Slide 26"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="26"
					aria-label="Slide 27"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="27"
					aria-label="Slide 28"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="28"
					aria-label="Slide 29"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="29"
					aria-label="Slide 30"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="30"
					aria-label="Slide 31"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="31"
					aria-label="Slide 32"
				></button>

				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="32"
					aria-label="Slide 33"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="33"
					aria-label="Slide 34"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="34"
					aria-label="Slide 35"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="35"
					aria-label="Slide 36"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="36"
					aria-label="Slide 37"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="37"
					aria-label="Slide 38"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="38"
					aria-label="Slide 39"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="39"
					aria-label="Slide 40"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="40"
					aria-label="Slide 41"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="41"
					aria-label="Slide 42"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="42"
					aria-label="Slide 43"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="43"
					aria-label="Slide 44"
				></button>
				<button
					type="button"
					data-bs-target="#hero-carousel"
					data-bs-slide-to="44"
					aria-label="Slide 45"
				></button>
			</div>

			<div className="carousel-inner">
				{/* Philippines */}
				<div className="carousel-item active">
					<Link to="/philippines#bohol">
						<img src={Images.bohol1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Bohol</h1>
							<p>Pristine beaches, Chocolate Hills, and adorable tarsiers.</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#elnido">
						<img
							src={Images.elnido1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>El Nido</h1>
							<p>
								Tropical paradise with breathtaking beaches and stunning
								limestone cliffs.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#batangas">
						<img
							src={Images.batangas1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Batangas</h1>
							<p>
								Beach lovers' haven offering picturesque coastlines, diving
								spots, and the iconic Taal Volcano.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#palawan">
						<img
							src={Images.palawan2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Palawan</h1>
							<p>
								Pristine beaches, stunning cliffs, and vibrant marine life await
								in this tropical paradise.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#zambales">
						<img
							src={Images.zambales2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Zambales</h1>
							<p>
								Experience stunning beaches and thrilling surf spots in
								Zambales, Philippines.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#cebu">
						<img src={Images.cebu2} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Cebu</h1>
							<p>
								A vibrant island filled with beautiful beaches, rich cultural
								heritage, and exciting city life.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#manila">
						<img
							src={Images.manila3}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Manila</h1>
							<p>
								Discover the bustling capital city of Manila, where history
								meets modernity in vibrant streets and iconic landmarks.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#batanes">
						<img
							src={Images.batanes3}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Batanes</h1>
							<p>
								Immerse yourself in the breathtaking beauty of Batanes,
								Philippines, with its dramatic landscapes and peaceful
								seascapes.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/philippines#boracay">
						<img
							src={Images.boracay1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>Philippines</h3>
							<h1>Boracay</h1>
							<p>
								Indulge in the world-famous white sand beaches and vibrant
								nightlife of Boracay, a tropical paradise in the Philippines.
							</p>
						</div>
					</Link>
				</div>

				{/* India */}
				<div className="carousel-item">
					<Link to="/india#agra">
						<img src={Images.agra1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>India</h3>
							<h1>Agra</h1>
							<p>
								Home of the Taj Mahal, a symbol of eternal love and
								architectural marvel.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#rajasthan">
						<img
							src={Images.rajasthan1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>India</h3>
							<h1>Rajasthan</h1>
							<p>
								Immerse yourself in the royal heritage of Rajasthan, with its
								grand forts, vibrant festivals, and rich cultural traditions.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#jammu">
						<img src={Images.jammu1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>India</h3>
							<h1>Jammu and Kashmir</h1>
							<p>
								Explore the breathtaking beauty of Jammu and Kashmir, with its
								serene lakes, snow-capped mountains, and picturesque valleys.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#kerala">
						<img
							src={Images.kerala1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>india</h3>
							<h1>kerala</h1>
							<p>
								Discover the tropical paradise of Kerala, known for its tranquil
								backwaters, lush greenery, and rejuvenating Ayurvedic retreats.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#himalayas">
						<img
							src={Images.himalayas1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>india</h3>
							<h1>Himalayas</h1>
							<p>
								Embark on a journey to the mighty Himalayas, where you can
								witness awe-inspiring landscapes, serene spirituality, and
								thrilling adventures.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#south">
						<img src={Images.south3} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>india</h3>
							<h1>South India</h1>
							<p>
								Experience the diverse charms of South India, with its ancient
								temples, vibrant festivals, and mouthwatering cuisine.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#goa">
						<img src={Images.goa1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>india</h3>
							<h1>goa</h1>
							<p>
								Unwind on the sun-kissed beaches of Goa, known for its lively
								nightlife, water sports, and Portuguese-influenced architecture.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/india#anadaman">
						<img
							src={Images.anadaman2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>india</h3>
							<h1>Anadaman and Nicobar Islands</h1>
							<p>
								Untouched paradise with pristine beaches and vibrant marine
								life.
							</p>
						</div>
					</Link>
				</div>

				{/* Japan */}
				<div className="carousel-item">
					<Link to="/japan#tokyo">
						<img src={Images.tokyo1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>japan</h3>
							<h1>tokyo</h1>
							<p>
								Japan's bustling capital city, known for its futuristic skyline,
								vibrant neighborhoods, and rich cultural heritage.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/japan#osaka">
						<img src={Images.osaka2} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>japan</h3>
							<h1>osaka</h1>
							<p>
								A lively city in Japan famous for its delicious street food,
								historic landmarks, and vibrant nightlife.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/japan#narita">
						<img
							src={Images.narita1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>japan</h3>
							<h1>narita</h1>
							<p>
								Serene town near Tokyo with a beautiful temple and traditional
								charm.
							</p>
						</div>
					</Link>
				</div>

				{/* Dubai */}
				<div className="carousel-item">
					<Link to="/uae#dubai">
						<img src={Images.dubai3} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3
								style={{
									textTransform: 'uppercase',
								}}
							>
								UAE
							</h3>
							<h1>dubai</h1>
							<p>Iconic skyscrapers, vibrant nightlife.</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/uae#abudhabi">
						<img
							src={Images.abudhabi2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3
								style={{
									textTransform: 'uppercase',
								}}
							>
								UAE
							</h3>
							<h1>abu dhabi</h1>
							<p>Modern architecture, beautiful beaches.</p>
						</div>
					</Link>
				</div>

				{/* Singapore */}
				<div className="carousel-item">
					<Link to="/singapore#singapore">
						<img
							src={Images.singapore3}
							className="d-block w-100"
							loading="lazy"
						/>
						<div
							className="carousel-caption d-block"
							style={{
								top: '60%',
							}}
						>
							<h1>Singapore</h1>
							<p>
								Modern city-state, rich cultural diversity, stunning
								architecture.
							</p>
						</div>
					</Link>
				</div>

				{/* Thailand */}
				<div className="carousel-item">
					<Link to="/thailand#pattaya">
						<img
							src={Images.pattaya1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>thailand</h3>
							<h1>pattaya</h1>
							<p>Lively beach city, nightlife, water sports.</p>
						</div>
					</Link>
				</div>

				{/* Thailand */}
				<div className="carousel-item">
					<Link to="/thailand#bangkok">
						<img
							src={Images.bangkok2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h3>thailand</h3>
							<h1>Bangkok</h1>
							<p>Vibrant metropolis, temples, street food.</p>
						</div>
					</Link>
				</div>

				{/* South Korea */}
				<div className="carousel-item">
					<Link to="/korea#jeju">
						<img src={Images.jeju3} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption  d-block">
							<h3>south korea</h3>
							<h1>jeju</h1>
							<p>Scenic island with natural wonders and pristine beaches.</p>
						</div>
					</Link>
				</div>

				{/* Korea */}
				<div className="carousel-item">
					<Link to="/korea#seoul">
						<img src={Images.seoul1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>south korea</h3>
							<h1>seoul</h1>
							<p>Dynamic capital merging tradition and modernity.</p>
						</div>
					</Link>
				</div>

				{/* Australia */}
				<div className="carousel-item">
					<Link to="/australia#sydney">
						<img
							src={Images.sydney1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>australia</h3>
							<h1>Sydney</h1>
							<p>
								Iconic harbor city with famous landmarks and vibrant culture.
							</p>
						</div>
					</Link>
				</div>

				{/* Australia */}
				<div className="carousel-item">
					<Link to="/australia#adelaide">
						<img
							src={Images.adelaide1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>australia</h3>
							<h1>Adelaide</h1>
							<p>
								Laid-back city renowned for its wine regions and festivals..
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/australia#perth">
						<img src={Images.perth1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption d-block">
							<h3>australia</h3>
							<h1>Perth</h1>
							<p>
								Picturesque city with stunning beaches and outdoor adventures.
							</p>
						</div>
					</Link>
				</div>

				<div className="carousel-item">
					<Link to="/australia#melbourne">
						<img
							src={Images.melbourne1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h3>australia</h3>
							<h1>Melbourne</h1>
							<p>Cultural hub blending art, food, and sports.</p>
						</div>
					</Link>
				</div>

				{/* Honkong */}
				<div className="carousel-item">
					<Link to="/hongkong#hongkong">
						<img
							src={Images.hongkong1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption d-block">
							<h1>Hongkong</h1>
							<p>Skyscrapers, traditions, vibrant cityscape.</p>
						</div>
					</Link>
				</div>

				{/* Cambodia */}
				<div className="carousel-item">
					<Link to="/cambodia#cambodia">
						<img
							src={Images.cambodia1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Cambodia</h1>
							<p>Temples and cultural wonders.</p>
						</div>
					</Link>
				</div>

				{/* Vietnam */}
				<div className="carousel-item">
					<Link to="/vietnam#vietnam">
						<img
							src={Images.vietnam1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Vietnam</h1>
							<p>Charm in every corner.</p>
						</div>
					</Link>
				</div>

				{/* Malaysia */}
				<div className="carousel-item">
					<Link to="/malaysia#malaysia">
						<img
							src={Images.malaysia2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Malaysia</h1>
							<p>Cultural fusion, natural beauty.</p>
						</div>
					</Link>
				</div>

				{/* Indonesia */}
				<div className="carousel-item">
					<Link to="/indonesia#indonesia">
						<img
							src={Images.indonesia1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Indonesia</h1>
							<p>Tropical paradise, diverse wonders.</p>
						</div>
					</Link>
				</div>

				{/* China */}
				<div className="carousel-item">
					<Link to="/china#china">
						<img src={Images.china1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption  d-block">
							<h1>China</h1>
							<p>Ancient traditions, modern marvels.</p>
						</div>
					</Link>
				</div>

				{/* Macau */}
				<div className="carousel-item">
					<Link to="/macau#macau">
						<img src={Images.macau1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption  d-block">
							<h1>Macau</h1>
							<p>Fusion of cultures, dazzling allure.</p>
						</div>
					</Link>
				</div>

				{/* Maladives */}
				<div className="carousel-item">
					<Link to="/maldives#maldives">
						<img
							src={Images.maldives2}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Maldives</h1>
							<p>Paradise islands, crystal-clear waters</p>
						</div>
					</Link>
				</div>

				{/* Newzealand */}
				<div className="carousel-item">
					<Link to="/newzealand#newzealand">
						<img
							src={Images.newzealand1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Newzealand</h1>
							<p>Adventure in breathtaking landscapes.</p>
						</div>
					</Link>
				</div>

				{/* Laos */}
				<div className="carousel-item">
					<Link to="/laos#laos">
						<img src={Images.laos1} className="d-block w-100" loading="lazy" />
						<div className="carousel-caption  d-block">
							<h1>Laos</h1>
							<p>Serenity, spirituality, hidden natural gems.</p>
						</div>
					</Link>
				</div>

				{/* Iceland */}
				<div className="carousel-item">
					<Link to="/iceland#iceland">
						<img
							src={Images.iceland1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Iceland</h1>
							<p>Nature's masterpiece, fire and ice.</p>
						</div>
					</Link>
				</div>

				{/* Myanmar */}
				<div className="carousel-item">
					<Link to="/myanmar#myanmar">
						<img
							src={Images.myanmmar1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Myanmar</h1>
							<p>Golden pagodas, rich heritage.</p>
						</div>
					</Link>
				</div>

				{/* Brunei */}
				<div className="carousel-item">
					<Link to="/brunei#brunei">
						<img
							src={Images.brunie3}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Brunei</h1>
							<p>Majestic kingdom, natural splendor.</p>
						</div>
					</Link>
				</div>

				{/* Taiwan */}
				<div className="carousel-item">
					<Link to="/taiwan#taiwan">
						<img
							src={Images.taiwan1}
							className="d-block w-100"
							loading="lazy"
						/>
						<div className="carousel-caption  d-block">
							<h1>Taiwan</h1>
							<p>Tradition and innovation harmonize.</p>
						</div>
					</Link>
				</div>
			</div>

			<button
				className="carousel-control-prev tour-packages-prev-btn"
				type="button"
				data-bs-target="#hero-carousel"
				data-bs-slide="prev"
			>
				<span className="carousel-slider p-2" aria-hidden="true">
					{Icons.chevronLeft}
				</span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next tour-packages-next-btn"
				type="button"
				data-bs-target="#hero-carousel"
				data-bs-slide="next"
			>
				<span className="carousel-slider p-2" aria-hidden="true">
					{Icons.chevronRight}
				</span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
