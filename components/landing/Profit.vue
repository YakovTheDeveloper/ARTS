<template>
    <Card>
        <Typo variant="h1" offset>ОЖИДАЕМЫЙ ЭФФЕКТ</Typo>
        <div class="container">


            <div class="content">
                <Typo variant="h2" color="black" align="left">
                    КОММЕРЧЕСКИЙ
                </Typo>
                <Typo variant="h3" color="black">
                    Извлечение прибыли
                    от продажи
                    производимой
                    продукции
                </Typo>
                <Typo variant="h3" color="black">
                    Мультипликативный
                    эффект смежным
                </Typo>
                <Typo variant="h3" color="black">
                    Продюсирование
                    художников
                </Typo>
            </div>
            <div class="content">
                <Typo variant="h2" color="black" align="left">
                    НАУЧНЫЙ
                </Typo>
                <Typo variant="h3" color="black">
                    Поиск новых
                    технологических
                    решений
                </Typo>
                <Typo variant="h3" color="black">
                    Создание среды для
                    развития
                    и формирования
                    новых творческих
                    идей и течений
                </Typo>
            </div>
            <div class="content">
                <Typo variant="h2" color="black" align="left">
                    СОЦИАЛЬНЫЙ
                </Typo>
                <Typo variant="h3" color="black">
                    Просвещение
                    (выставочная
                    деятельность)
                </Typo>
                <Typo variant="h3" color="black">
                    Неформальное
                    образование (мастер-классы, лекции)
                </Typo>
                <Typo variant="h3" color="black">
                    Поддержка молодых
                    художников (создание
                    условий для
                    раскрытия творческой
                    молодежи)
                </Typo>
            </div>


            <!-- <Explore /> -->
        </div>
    </Card>
</template>

<script setup>
import Card from '~/components/Card.vue';
import OrderButton from '~/components/common/OrderButton.vue';
import Explore from '~/components/landing/Explore.vue';
import Typo from '~/components/Typo.vue';
import Button from '~/components/ui/Button.vue';


const props = defineProps({
    openModal: {
        type: Function,
    }
})
</script>

<style scoped>
.container {
    width: 100%;
    width: var(--content-width);
    min-height: 470px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: var(--items-gap);
    position: relative;

    @media (max-width: 575.98px) {
        display: flex;
        flex-direction: column;
    }

}



.gallery {
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: var(--border-radius-m);
    grid-column: span 2;

    background-image: url('/images/photos/4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}

.content {
    border-top: 1px solid #000;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}


.inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-align: center;
    padding: 20px;
    height: 100%;
    flex-grow: 1;

    @media (max-width: 575.98px) {
        min-height: 400px;
    }
}
</style>