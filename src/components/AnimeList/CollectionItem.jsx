"use client"; // Ini menandakan bahwa komponen ini harus berjalan di sisi client

import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { TiDeleteOutline } from "react-icons/ti";

const CollectionItem = ({ collect, userEmail }) => {
  const handleDelete = async (anime_mal_id) => {
    try {
      Swal.fire({
        title: "Apakah kamu yakin?",
        text: "Kamu tidak bisa mengembalikan item ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetch("/api/v1/collection", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              anime_mal_id: anime_mal_id,
              user_email: userEmail,
            }),
          });

          const data = await response.json();
          if (data.isDeleted) {
            Swal.fire("Terhapus!", "Item telah dihapus.", "success");
            window.location.reload();
          } else {
            Swal.fire("Gagal!", "Item gagal dihapus.", "error");
          }
        }
      });
    } catch (error) {
      console.error("Error deleting anime from collection:", error);
      Swal.fire("Error!", "Terjadi kesalahan saat menghapus.", "error");
    }
  };

  return (
    <div className="glassmorphism w-full transition-transform duration-300 ease-in-out transform hover:scale-105">
      <a href={`/anime/${collect.anime_mal_id}`}>
        <div className="flex">
          <Image
            src={collect.anime_image}
            alt="Anime Image"
            width={350}
            height={350}
            className="w-32 rounded-l-[20px]"
          />
          <div className="p-4">
            <h1 className="font-semibold text-sm text-justify">
              {collect.anime_name}
            </h1>
          </div>
        </div>
      </a>
      <button
        className="mt-2 bg-red-500 text-white z-50 px-3 py-1 rounded"
        onClick={() => handleDelete(collect.anime_mal_id)}
      >
        <TiDeleteOutline />
      </button>
      
    </div>
  );
};

export default CollectionItem;
