<template>
  <form class="grid grid-cols-12 gap-4 rounded-lg max-h-max">
    <div class="col-span-12 md:col-span-7 lg:col-span-7 space-y-4">
      <Card title="ข้อมูลลูกค้า">
        <div class="space-y-4">
          <Textinput
            label="ชื่อลูกค้า"
            type="text"
            placeholder="ชื่อ นามสกุล"
            msgTooltip
            name="name"
            v-model="name"
            :error="nameError"
          />
          <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
            <Textinput
              label="ที่อยู่"
              type="text"
              placeholder="ที่อยู่"
              msgTooltip
              name="address"
              v-model="address"
              :error="addressError"
            />
            <Textinput
              label="เบอร์ติดต่อ"
              type="text"
              placeholder="0812345678"
              msgTooltip
              name="phone"
              v-model="phone"
              :error="phoneError"
            />
          </div>
        </div>
      </Card>

      <Card title="สีวัสดุ">
        <div class="space-y-4">
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <label class="inline-flex text-sm dark:text-slate-300 font-normal">
              สีกรอบ
            </label>
            <div class="flex flex-wrap space-x-4">
              <ColorRadio
                v-for="(item, i) in frameColors"
                :key="i"
                :label="item.label"
                :color="item.color"
                :value="item.value"
                :activeClass="item.activeClass"
                class="mb-5"
                name="frameColor"
                v-model="frameColor"
                :error="frameColorError"
              />
            </div>
          </div>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <label class="inline-flex text-sm dark:text-slate-300 font-normal">
              สีผ้ามุ้ง
            </label>
            <div class="flex flex-wrap space-x-4">
              <ColorRadio
                v-for="(item, i) in cottonColors"
                :key="i"
                :label="item.label"
                :color="item.color"
                :value="item.value"
                :activeClass="item.activeClass"
                class="mb-5"
                name="cottonColor"
                v-model="cottonColor"
                :error="cottonColorError"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card bodyClass="p-0">
        <header
          class="border-b p-6 border-slate-100 dark:border-slate-700 flex justify-between items-center"
        >
          <h6 class="card-title mb-0">ขนาดผลิตมุ้งจีบ</h6>
          <div>
            <Button
              text="เพิ่มบาน"
              icon="heroicons-outline:plus"
              btnClass="btn-dark"
              type="button"
              @click="push({ position: '', width: '', height: '', doorSide: '', railSize: '', description: '' })"
            />
          </div>
        </header>
        <div 
          v-for="(field, idx) in fields"
          :key="field.key"  
          class="p-6"
        >
          <div class="grid xl:grid-cols-3 grid-cols-1 gap-5">
            <div class="xl:col-span-1 space-y-4 relative">
              <div class="w-full h-full flex justify-center items-center p-8">
                <div class="w-full h-48 relative rounded border border-slate-400 dark:border-slate-600 transition-all duration-150">
                  <span class="w-full h-full absolute flex justify-center items-end bottom-[-2rem] text-sm dark:text-slate-300 font-normal">
                    {{ field.value.width != '' ? field.value.width : 'กว้าง' }}
                  </span>
                  <span class="w-full h-full absolute flex justify-end items-center left-[2.5rem] text-sm dark:text-slate-300 font-normal">
                    {{ field.value.height != '' ? field.value.height : 'สูง' }}
                  </span>
                  <span class="w-full h-full absolute flex justify-center items-end text-sm dark:text-slate-300 font-normal">
                    {{ field.value.railSize == 'small' ? 'ต' : '' }}
                  </span>
                  <div v-if="field.value.doorSide != ''" :class="field.value.doorSide + '-0'" class=" w-8 h-full absolute rounded bg-slate-400 dark:bg-slate-600"></div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2 space-y-4">
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <label class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]">
                  ตำแหน่ง
                </label>
                <div class="flex-1">
                  <Textinput
                    type="text"
                    placeholder="ตำแหน่ง"
                    msgTooltip
                    horizontal
                    :name="`products[${idx}].position`"
                    v-model="field.value.position"
                    :error="productsError"
                  />
                </div>
                <div class="flex-none relative">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                    @click="remove(idx)"
                  >
                    <Icon icon="heroicons-outline:trash" />
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <label class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]">
                  ขนาด
                </label>
                <div class="flex-1">
                  <Textinput
                    type="text"
                    placeholder="กว้าง"
                    msgTooltip
                    horizontal
                    :name="`products[${idx}].width`"
                    v-model="field.value.width"
                    :error="widthError"
                  />
                </div>
                <div class="flex-none">
                  x
                </div>
                <div class="flex-1">
                  <Textinput
                    type="text"
                    placeholder="สูง"
                    msgTooltip
                    horizontal
                    :name="`products[${idx}].height`"
                    v-model="field.value.height"
                    :error="heightError"
                  />
                </div>
              </div>
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <label class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]">
                  ตำแหน่งการเก็บ
                </label>
                <div class="flex flex-wrap space-x-4">
                  <RadioBox
                    v-for="(item, i) in doorSideOptions"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                    class="mb-5"
                    :name="`products[${idx}].doorSide`"
                    v-model="field.value.doorSide"
                    :error="doorSideError"
                  />
                </div>
              </div>
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <label class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]">
                  ขนาดราง
                </label>
                <div class="flex flex-wrap space-x-4">
                  <RadioBox
                    v-for="(item, i) in railSizeOptions"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                    class="mb-5"
                    :name="`products[${idx}].railSize`"
                    v-model="field.value.railSize"
                    :error="railSizeError"
                  />
                </div>
              </div>
              <Textarea
                label="คำอธิบาย"
                placeholder="คำอธิบายเพิ่มเติม"
                msgTooltip
                horizontal
                :name="`products[${idx}].description`"
                v-model="field.value.description"
                :error="descriptionError"
              />
              <!-- <div class="flex items-start space-x-6 rtl:space-x-reverse">
                <label
                  class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]"
                >
                  ภาพประกอบ
                </label>
                <div class="flex-1">
                  <Fileinput
                    label="เลือกไฟล์"
                    placeholder="เลือกรูปภาพ"
                    name="pdf"
                    selectedFile="selectedFile"
                    multiple
                    preview
                  />
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div class="col-span-12 md:col-span-5 lg:col-span-5 space-y-4">
      <!-- <Card title="สถานะ">
        <div class="space-y-4">
          
        </div>
      </Card> -->
      <Card title="วันที่ติดตั้ง">
        <div class="space-y-4">
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <label class="inline-flex text-sm dark:text-slate-300 font-normal md:w-[100px] w-[60px]">
              วันที่ติดตั้ง
            </label>
            <div class="flex-1">
              <flat-pickr
              :config="{ enableTime: true, dateFormat: 'd/m/Y เวลา H:i น.' }"
              placeholder="วว/ดด/ปป เวลา 00:00 น."
              class="form-control"
              name="dateInstall"
              v-model="dateInstall"
              :error="dateInstallError"
              />
            </div>
          </div>
        </div>
      </Card>
      <Card title="สรุปยอด">
        <div class="space-y-4">
          <Textinput
            label="จำนวนบาน"
            type="text"
            placeholder="จำนวนบาน"
            classLabel="pt-2"
            msgTooltip
            horizontal
            name="quantity"
            v-model="quantity"
            :error="quantityError"
          />
          <Textinput
            label="จำนวน ตร.ม."
            type="text"
            placeholder="จำนวน ตร.ม."
            classLabel="pt-2"
            msgTooltip
            horizontal
            name="sqm"
            v-model="sqm"
            :error="sqmError"
          />
          <Textinput
            label="ส่วนลด"
            type="text"
            placeholder="xxx,xxx"
            classLabel="pt-2"
            msgTooltip
            horizontal
            name="discout"
            v-model="discout"
            :error="discoutError"
          />
          <InputGroup 
            label="ราคายอดรวม"
            type="text"
            placeholder="xxx,xxx"
            classLabel="pt-2"
            append="฿" 
            msgTooltip
            horizontal
            name="totalPrice"
            v-model="totalPrice"
            :error="totalPriceError"
          />
        </div>
      </Card>
      <Card title="สรุปยอด">
        <div class="space-y-4">
          name : {{ name }} <br>
          address : {{ address }} <br>
          phone : {{ phone }} <br>
          frameColor : {{ frameColor }} <br>
          cottonColor : {{ cottonColor }} <br>
          dateInstall : {{ dateInstall }} <br>
          quantity : {{ quantity }} <br>
          sqm : {{ sqm }} <br>
          discout : {{ discout }} <br>
          totalPrice : {{ totalPrice }} <br>
          product : {{ fields }} <br>
        </div>
      </Card>
    </div>
    <div class="col-span-12 flex justify-end">
      <Button
        text="เพิ่มออร์เดอร์"
        icon="heroicons-outline:plus"
        btnClass="btn-dark"
        type="submit"
      />
    </div>
  </form>
</template>
<script setup>
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
import InputGroup from "@/components/InputGroup";
import Fileinput from "@/components/Fileinput";
import Textarea from "@/components/Textarea";
import RadioBox from "@/components/RadioBox";
import ColorRadio from "@/components/ColorRadio";
import Switch from "@/components/Switch";
import Select from "@/components/Select";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

import { useForm, useFieldArray } from "vee-validate";
import { ref } from "vue";

const { handleSubmit } = useForm({
  initialValues: {
    products: [
      {
        position: "",
        width: "",
        height: "",
        doorSide: "",
        railSize: "",
        description: ""
        // selected: null;
      }
    ],
  },
});
const { remove, push, fields } = useFieldArray("products");
const onSubmit = handleSubmit(() => {});

// Variable
const name = ref("");
const address = ref("");
const phone = ref("");
const frameColor = ref("");
const cottonColor = ref("");
const dateInstall = ref("");
const quantity = ref("");
const sqm = ref("");
const discout = ref("");
const totalPrice = ref("");

// Options
const frameColors = [
  {
    value: "white",
    label: "สีขาว",
    color: "bg-white",
  },
  {
    value: "black",
    label: "สีดำ",
    color: "bg-black-500",
  }
];
const cottonColors = [
  {
    value: "grey",
    label: "สีเทา",
    color: "bg-slate-500",
  },
  {
    value: "black",
    label: "สีดำ",
    color: "bg-black-500",
  }
];
const doorSideOptions = [
  {
    value: "left",
    label: "ฝั่งซ้าย",
  },
  {
    value: "right",
    label: "ฝั่งขวา",
  }
];
const railSizeOptions = [
  {
    value: "normal",
    label: "ธรรมดา",
  },
  {
    value: "small",
    label: "เตี้ย",
  }
];
</script>
<style lang="scss"></style>
