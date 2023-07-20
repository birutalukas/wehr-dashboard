<script lang="ts">
import { reactive } from "vue";

interface SmartPhones extends Array<Phone> {
    smartphones?: Array<Object>;
    schedule?: Array<Object>;
}
interface Phone {
    title: string;
    description: string;
    price: number;
    rating: number;
    pinnable: boolean;
}

const smartphones: SmartPhones = [];
const schedule: SmartPhones = [];

export const usePhones = reactive({
    smartphones,
    schedule,
});

export default smartphones;
</script>
