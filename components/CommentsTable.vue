<template>
    <div class="m-auto">
        <table class="bg-cool-grey-050 p-4 rounded-lg mb-4">
            <tr>
                <th class="p-1 font-thin border-b text-sm uppercase text-cool-grey-600">Nombre</th>
                <th class="p-1 font-thin border-b text-sm uppercase text-cool-grey-600 hidden sm:table-cell">email</th>
                <th class="p-1 font-thin border-b text-sm uppercase text-cool-grey-600 hidden md:table-cell">Teléfono</th>
                <th class="p-1 font-thin border-b text-sm uppercase text-cool-grey-600">Fecha</th>
            </tr>
            <tr v-for="comment in comments" v-bind:key="comment.id">
                <td @click="changeSelected(comment)" class="py-2 px-3 text-cool-grey-600">{{ comment.firstName + ' ' + comment.lastName }}</td>
                <td class="py-3 px-3 text-cool-grey-600 hidden sm:table-cell">{{ comment.email }}</td>
                <td class="py-3 px-3 text-cool-grey-600 hidden md:table-cell">{{ comment.phone }}</td>
                <td class="py-3 px-3 text-cool-grey-600">{{ comment.created_at }}</td>
            </tr>
        </table>
        <!-- This part is to show the comment details -->
        <div class="flex-1 flex flex-col -mx-2 bg-cool-grey-050 rounded-lg">
            <p class="text-cool-grey-600 font-thin text-center py-4 uppercase">Detalle del mensaje</p>
            <div class="flex flex-col md:flex-row ">
                <div class="flex-1 flex flex-col m-2 text-cool-grey-600 bg-cool-grey-100 rounded-lg py-2 px-3">
                    Nombre: {{ selected.firstName }}
                </div>
                <div class="flex-1 flex flex-col m-2 text-cool-grey-600 bg-cool-grey-100 rounded-lg py-2 px-3">
                    Apellido: {{ selected.lastName }}
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 flex flex-col m-2 text-cool-grey-600 bg-cool-grey-100 rounded-lg py-2 px-3">
                    Teléfono: {{ selected.phone }}
                </div>
                <div class="flex-1 flex flex-col m-2 text-cool-grey-600 bg-cool-grey-100 rounded-lg py-2 px-3">
                    Email: {{ selected.email }}
                </div>
            </div>
            <div class="flex flex-col flex-1 m-2 text-cool-grey-600 bg-cool-grey-100 rounded-lg py-2 px-3">
                <p>Mensaje:</p>
                {{ selected.message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            url: '/comments',
            comments: [],
            selected: '',
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            axios.get(this.url)
                .then(response => {
                    this.fillData(response.data)
                })
        },
        fillData(comments){
            this.comments = comments;
        },
        changeSelected(selected){
            this.selected = selected;
            console.log(this.selected.email);
        }
    }
}
</script>