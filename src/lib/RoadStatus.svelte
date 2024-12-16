<script lang="ts">
    import { Car, Clock } from 'lucide-svelte';

    // This would come from your backend/API
    const status = {
        isPlowed: true,
        lastUpdated: "2024-12-15T12:00:00",
        conditions: "Plowed with some compact snow and ice",
    };
</script>

<div class="w-fit px-8 max-w-2xl rounded-md bg-slate-100/80 p-4 shadow-lg dark:bg-gray-800/80">
    <div class="flex flex-col items-center space-y-2 text-center">
        <div class="flex items-center space-x-2">
            <Car 
                class={status.isPlowed ? "text-green-600" : "text-red-600"} 
                size={28}
            />
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                FS 39 road status: {status.isPlowed ? "plowed" : "unplowed"}
            </h2>
        </div>
        
        <p class="text-base text-gray-800 dark:text-gray-200 font-medium">
            {status.conditions}
        </p>

        <div class="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
            <Clock size={14} />
            <span>
                Updated {new Date(status.lastUpdated).toLocaleDateString()}
            </span>
        </div>
    </div>
</div>