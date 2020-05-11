<template>
	<div id="app">
		<TopLine>
			<TopLineContainer type="inline" class="container">
				<Logotype/>
				<LangSwitch>
					<href to="Rus">Rus</href>
					<href to="Kaz">Kaz</href>
					<href to="Eng">Eng</href>
				</LangSwitch>
					<horizontalMenu ref="horMenu" v-show="!$root.menuOpen">
						<mitem label="О КОМПАНИИ"/>
						<mitem label="МЕДИА-ЦЕНТР"/>
						<mitem label="ИНВЕСТИЦИОННАЯ ДЕЯТЕЛЬНОСТЬ"/>
						<mitem label="ФОНДЫ"/>
						<mitem label="НОВОСТИ"/>
						<mitem label="ЗАКУПКИ"/>
					</horizontalMenu>
					<headerNumberAndSocBox class="header" v-show="$root.menuOpen" tel="+7 (7172) 55-49-21"/>
				<search :class="[$root.menuOpen?'menuOpened':'']" ref="search"/>
				<button :class="$root.menuOpen?'open':'close'" class="hamburgerButton">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<bigMenu type="hidden" button=".hamburgerButton" wrapItems="container">
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
				</bigMenu>
			</TopLineContainer>
		</TopLine>
		<bigSlider>
			<bigSliderItems link-to="#" linkText="More" bg-image="https://images.unsplash.com/photo-1588078670249-d248af02a1b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80">
				<template #title>
					Qadasd
				</template>
				<template #prevText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos dolorum ducimus in
					nesciunt quam quasi quia vero! Alias blanditiis consequatur dolore est facere id modi obcaecati
					quia repellat repudiandae.
				</template>
				<template #percent>
					70%
				</template>
				<template #percentText>
					Lorem ipsum dolor sit amet.
				</template>
			</bigSliderItems>
			<bigSliderItems link-to="#" linkText="More" bg-image="https://images.unsplash.com/photo-1588025256123-a38c6e223f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80">
				<template #title>
					Qadasd
				</template>
				<template #prevText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos dolorum ducimus in
					nesciunt quam quasi quia vero! Alias blanditiis consequatur dolore est facere id modi obcaecati
					quia repellat repudiandae.
				</template>
				<template #percent>
					70%
				</template>
				<template #percentText>
					Lorem ipsum dolor sit amet.
				</template>
			</bigSliderItems>
		</bigSlider>
		<div class="container">
			<newsList>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
					<template #title>Almex Baiterek Fund</template>
					<template #preview>Склады будут размещены на территории Специальной экономической зоны «Хоргос – Восточные ворота». Проект финансируется Холдингом «Байтерек» через Казахстанский инфраструктурный фонд, который учрежден дочерней организацией Х</template>
				</newsCard>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
					<template #title>Kazakhstan Growth Fund</template>
					<template #preview>Привлечения иностранных инвестиций в приоритетные сектора экономики</template>
				</newsCard>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
					<template #title>Kazakhstan Infrastructure Fund</template>
					<template #preview>Привлечения иностранных инвестиций в приоритетные сектора экономики</template>
				</newsCard>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80">
					<template #title>Aureos Central Asia Fund</template>
					<template #preview>Привлечения иностранных инвестиций в приоритетные сектора экономики</template>
				</newsCard>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
					<template #title>Almex Baiterek Fund</template>
					<template #preview>Привлечения иностранных инвестиций в приоритетные сектора экономики</template>
				</newsCard>
				<newsCard
						bg-image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
					<template #title>Almex Baiterek Fund</template>
					<template #preview>Привлечения иностранных инвестиций в приоритетные сектора экономики</template>
				</newsCard>
				<template #footerList>
					<recButton link-to="#">View all project</recButton>
				</template>
			</newsList>
		</div>
		<div class="whiteBgSection">
			<div class="container">
				<div class="section_title">
					Инвестиционная деятельность
				</div>
				<div class="row">
					<div class="col-lg-4">
						<div class="investment-activities investment-activities--blue">
							<div class="investment-activities__title">
								Наши фонды
							</div>
							<middleSlider class="investment-activities__slider--blue">
								<middleSliderItems class="investment-activities__slider--blue--item">
									<img src="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80" alt="" class="item__img">
									<div class="item__title">Just slider title</div>
									<div class="item__preview-text"> Lorem ipsum dolor sit amet, consectetur adipisicing
										elit. Animi assumenda incidunt natus perspiciatis sint ullam.
									</div>
									<btnArrow to="#">More</btnArrow>
								</middleSliderItems>
								<middleSliderItems class="investment-activities__slider--blue--item">
									<img src="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80" alt="" class="item__img">
									<div class="item__title">Just slider title</div>
									<div class="item__preview-text"> Lorem ipsum dolor sit amet, consectetur adipisicing
										elit. Animi assumenda incidunt natus perspiciatis sint ullam.
									</div>
									<btnArrow to="#">More</btnArrow>
								</middleSliderItems>
							</middleSlider>
						</div>
					</div>
					<div class="col-lg-8">
						<div class="investment-activities investment-activities--white">
							<middleSlider class="investment-activities__slider--white">
								<middleSliderItems class="investment-activities__slider--white--item">
									<div class="title__gray">Статистика</div>
									<div class="title__black">Динамика инвестиции</div>
									<div class="title__gray title__gray--small">млн. долл. США</div>
									<p>13 фондов прямых инвестиции с капитализацией 2.4 млрд. долл. США</p>
									<img src="./assets/img/demo/chart.svg" alt="">
								</middleSliderItems>
							</middleSlider>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="section_head">
				<div class="section_title">
					News
				</div>
				<a href="#" class="linkToMore">All news</a>
			</div>
			<newsList>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
				<simpleCardNews
						img="https://images.unsplash.com/photo-1546746186-ded9d73a842e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80">
					<template #date>10.11.2099</template>
					<template #title>Lorem ipsum dolor sit amet, consectetur</template>
					<template #shortDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, at?
					</template>
				</simpleCardNews>
			</newsList>
		</div>
		<div class="partners_carousel">
			<div class="container">
				<div class="section_title">Наши партнеры</div>
			</div>
			<carousel class="partnerCarousel">
				<carouselItems class="partnerCarousel__item">
					<div class="partnerCarousel__content">
						<img src="./assets/img/demo/partlogo.png" alt="">
						<div class="title">Первая библиотека Первого Президента</div>
					</div>
				</carouselItems>
				<carouselItems class="partnerCarousel__item">
					<div class="partnerCarousel__content">
						<img src="./assets/img/demo/partlogo.png" alt="">
						<div class="title">Первая библиотека Первого Президента</div>
					</div>
				</carouselItems>
				<carouselItems class="partnerCarousel__item">
					<div class="partnerCarousel__content">
						<img src="./assets/img/demo/partlogo.png" alt="">
						<div class="title">Первая библиотека Первого Президента</div>
					</div>
				</carouselItems>
			</carousel>
		</div>
		<footer>
			<TopLine>
				<TopLineContainer type="inline" class="container">
					<Logotype fl="#fff"/>
					<LangSwitch>
						<href to="Rus">Rus</href>
						<href to="Kaz">Kaz</href>
						<href to="Eng">Eng</href>
					</LangSwitch>
					<headerNumberAndSocBox class="white" tel="+7 (7172) 55-49-21"/>
					<search ref="search"/>
				</TopLineContainer>
				<bigMenu type="open" wrapItems="container">
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
					<blockMenu label="О КОМПАНИИ">
						<mitem label="Кратко о нас"/>
						<mitem label="Миссия"/>
						<mitem label="Стратегия"/>
						<mitem label="Наша команда"/>
						<mitem label="Наша история"/>
					</blockMenu>
				</bigMenu>
			</TopLine>
		</footer>
	</div>
</template>

<script>
    import TopLine from "./components/layoutElements/TopLine";
    import Logotype from "./components/logotype/Logotype";
    import {LangSwitch, href} from "./components/LangSwitch/index.js";
    import {horizontalMenu, blockMenu, mitem} from "./components/Menu/index.js";
    import search from "./components/search/search";
    import bigMenu from "./components/bigMenu/bigMenu";
    import TopLineContainer from "./components/layoutElements/TopLineContainer";
    import bigSlider from "./components/Slider/bigSlider";
    import bigSliderItems from "./components/Slider/bigSliderItems";
    import newsList from "./components/media/newsCard/newsList";
    import newsCard from "./components/media/newsCard/newsCard";
    import recButton from "./components/buttons/recButton/recButton";
    import middleSlider from "./components/Slider/middleSlider/middleSlider";
    import middleSliderItems from "./components/Slider/middleSlider/middleSliderItems";
    import btnArrow from "./components/buttons/arrowButton/btnArrow";
    import simpleCardNews from "./components/media/newsCard/simpleCardNews";
    import carousel from "./components/Slider/owl/carousel";
    import carouselItems from "./components/Slider/owl/carouselItems";
    import headerNumberAndSocBox from "./components/layoutElements/headerElement/headerNumberAndSocBox";

    export default {
        name: 'App',
        data() {
            return {
                open: false
            }
        },
        components: {
            headerNumberAndSocBox,
            carousel, carouselItems,
            TopLine, TopLineContainer, simpleCardNews,
            Logotype, LangSwitch, href,
            horizontalMenu, mitem, blockMenu,
            search,
            bigMenu,
            bigSlider, bigSliderItems,
            newsList, newsCard, recButton,
            middleSlider, middleSliderItems,
            btnArrow
        }
    }
</script>