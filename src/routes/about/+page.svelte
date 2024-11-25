<script>
    const boardMembers = [
        { role: 'President', name: 'Jerry Hustafa' },
        { role: 'Treasurer', name: 'Dana Nave' },
        { role: 'Secretary', name: 'Dany Clay' },
    ];

    const missionPoints = [
        'Organizing outings for ski touring and snowshoeing',
        'Maintaining over 20 miles of cross-country and snowshoe trails',
        'Planning for the addition of a Nordic shelter in the Lick Creek area',
        'Advocating for protection of the backcountry experience',
        'Teaching Nordic skiing skills',
        'Organizing social events'
    ];
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-white">
    <div class="w-full max-w-4xl px-4 py-12">
        <h1 class="mb-12 text-center text-4xl font-bold text-stone-800">Eagle Cap Nordic Club</h1>
        
        <div class="space-y-12">
            <section>
                <h2 class="mb-4 text-2xl font-semibold text-stone-700">Our Story</h2>
                <p class="leading-relaxed text-stone-600">
                    As the newest chapter of the Oregon Nordic Club, we're dedicated to enriching Wallowa County's cross-country skiing community. Our focus is on making the region's exceptional Nordic skiing opportunities more accessible and enjoyable for everyone.
                </p>
                <hr class="mt-12 border-stone-200" />
            </section>

            <section>
                <h2 class="mb-4 text-2xl font-semibold text-stone-700">Our Mission</h2>
                <p class="mb-6 leading-relaxed text-stone-600">
                    The Eagle Cap Nordic Club enhances cross-country skiing and snowshoeing in Northeast Oregon through various initiatives and activities:
                </p>
                <ul class="grid gap-4 text-stone-600 sm:grid-cols-2">
                    {#each missionPoints as point}
                        <li class="flex items-start">
                            <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-400"></span>
                            <span>{point}</span>
                        </li>
                    {/each}
                </ul>
                <hr class="mt-12 border-stone-200" />
            </section>

            <section>
                <h2 class="mb-6 text-2xl font-semibold text-stone-700">Board of Directors</h2>
                <div class="flex justify-center">
                    <div class="w-64">
                        <ul class="space-y-3">
                            {#each boardMembers as { role, name }}
                                <li class="flex justify-between text-stone-600">
                                    <span class="font-bold">{role}:</span>
                                    <span>{name}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
                <hr class="mt-12 border-stone-200" />
            </section>

            <section>
                <h2 class="mb-4 text-2xl font-semibold text-stone-700">Join Our Community</h2>
                <p class="mb-6 leading-relaxed text-stone-600">
                    Whether you're new to Nordic skiing or a seasoned enthusiast, we welcome you to join our growing community. Your membership helps support trail maintenance, plowing, grooming initiatives, and community events.
                </p>
                <button class="rounded-lg bg-stone-600 px-6 py-2 text-white transition-colors hover:bg-stone-700">
                    Become a Member
                </button>
            </section>
        </div>
    </div>
</div>