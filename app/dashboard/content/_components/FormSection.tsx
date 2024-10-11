"use client"
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFormInput: any,
    loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }
    return (
        <div className="p-5 shadow-md border rounded-lg bg-blue-100">
            { /* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
            <h2 className="font-bold text-2xl mb-2 text-primary">
                {selectedTemplate?.name}
            </h2>
            <p className="text-gray-800 text-sm">
                {selectedTemplate?.desc}
            </p>
            <form className="mt-6 text-black" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
                        <label className="font-bold">{item.label}</label>
                        {item.field === "input" ? (
                            <Input
                                className="border-indigo-400"
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : item.field === "textarea" ? (
                            <Textarea
                                className="border-indigo-400"
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : null}
                    </div>
                ))}
                <Button type="submit"
                    className="w-full font-extrabold py-6 bg-gradient-to-r from-indigo-700 to-blue-400 hover:text-black hover:scale-105 duration-500"
                    disabled={loading}>
                    {loading && <Loader2Icon className="animate-spin" />}
                    Generate
                </Button>
            </form>
        </div>
    );
}

export default FormSection;