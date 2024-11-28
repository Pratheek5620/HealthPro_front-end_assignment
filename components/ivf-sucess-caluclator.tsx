import React from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function IVFSuccessCalculator() {
  return (
    <div className="min-h-screen bg-[#fef2f2] py-8 px-4">
      {/* Breadcrumb */}
      <div className="mb-6 ">
        <Link href="#" className="text-gray-500 hover:text-black text-sm">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-black text-sm">IVF Success Rate Calculator</span>
      </div>

      <form className="space-y-8 max-w-xl mx-auto">
        {/* Age Range */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Which age range applies to you?</h2>
          <RadioGroup defaultValue="30-34" className="grid grid-cols-3 gap-4 justify-center mx-auto custom-radio">
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="under-30" id="under-30" className="custom-radio" />
              <Label htmlFor="under-30" className="text-black-500">Under 30</Label>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="30-34" id="30-34" className="custom-radio color-orange" />
              <Label htmlFor="30-34" className="text-black-500">30 - 34</Label>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="35-37" id="35-37" className="custom-radio" />
              <Label htmlFor="35-37" className="text-black-500">35 - 37</Label>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="38-40" id="38-40" className="custom-radio" />
              <Label htmlFor="38-40" className="text-black-500">38 - 40</Label>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="41-43" id="41-43" className="custom-radio" />
              <Label htmlFor="41-43" className="text-black-500">41 - 43</Label>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <RadioGroupItem value="above-43" id="above-43" className="custom-radio" />
              <Label htmlFor="above-43" className="text-black-500">Above 43</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Number of IVF Cycles */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Number of IVF Cycles</h2>
          <div className="flex items-center gap-4">
              <Slider
                min={1}
                max={5}
                step={1}

                className="flex-grow"
              />
            </div>
        </div>

        {/* Previous Procedures */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Have you undergone these procedures before?</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-2">ICSI Procedure:</p>
              <RadioGroup defaultValue="no" className="flex justify-center space-x-4 custom-radio">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="icsi-yes" className="custom-radio" />
                  <Label htmlFor="icsi-yes" className="text-black-500">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="icsi-no" className="custom-radio" />
                  <Label htmlFor="icsi-no" className="text-black-500">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <p className="mb-2">PGT Testing:</p>
              <RadioGroup defaultValue="no" className="flex justify-center space-x-4 custom-radio">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="pgt-yes" className="custom-radio" />
                  <Label htmlFor="pgt-yes" className="text-black-500">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="pgt-no" className="custom-radio" />
                  <Label htmlFor="pgt-no" className="text-black-500">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Do you have any of these medical conditions?</h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center custom-checkbox">
            <div className="flex items-center space-x-2">
              <Checkbox id="pcos" className="custom-checkbox" />
              <Label htmlFor="pcos" className="text-black-500">PCOS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="endometriosis" className="custom-checkbox" />
              <Label htmlFor="endometriosis" className="text-black-500">Endometriosis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="low-ovarian-reserve" className="custom-checkbox" />
              <Label htmlFor="low-ovarian-reserve" className="text-black-500">Low Ovarian Reserve</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="male-factor-infertility" className="custom-checkbox" />
              <Label htmlFor="male-factor-infertility" className="text-black-500">Male Factor Infertility</Label>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center items-center">
          <Link href="/home/result">
            <Button type="submit" variant="destructive" size="lg" className="w-small bg-red-500 text-white">
              Calculate
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
