<template>
    <div class="max-w-5xl mx-auto py-10 flex gap-6">
  
      <!-- Sidebar -->
      <div class="w-1/3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 class="font-semibold mb-4">Conversations</h2>
  
        <div
          v-for="chat in chats"
          :key="chat.id"
          class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
        >
          {{ chat.name }}
        </div>
      </div>
  
      <!-- Chat Area -->
      <div class="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col">
        <div class="flex-1 space-y-3 overflow-y-auto mb-4">
          <div
            v-for="msg in messages"
            :key="msg.id"
            :class="msg.me ? 'text-right' : 'text-left'"
          >
            <div
              class="inline-block px-4 py-2 rounded-lg"
              :class="msg.me
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'"
            >
              {{ msg.text }}
            </div>
          </div>
        </div>
  
        <input
          v-model="newMessage"
          @keyup.enter="send"
          placeholder="Type a message..."
          class="border rounded-lg px-4 py-3"
        />
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const chats = ref([
    { id: 1, name: "John Developer" },
    { id: 2, name: "Sarah Backend" }
  ])
  
  const messages = ref([
    { id: 1, text: "Hello!", me: false },
    { id: 2, text: "Hi, I'm interested in your job.", me: true }
  ])
  
  const newMessage = ref("")
  
  const send = () => {
    if (!newMessage.value) return
    messages.value.push({
      id: Date.now(),
      text: newMessage.value,
      me: true
    })
    newMessage.value = ""
  }
  </script>